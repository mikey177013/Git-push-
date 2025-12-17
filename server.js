const express = require('express');
const multer = require('multer');
const AdmZip = require('adm-zip');
const simpleGit = require('simple-git');
const path = require('path');
const fs = require('fs');

const app = express();
const upload = multer({ dest: 'uploads/' });

app.use(express.static('public'));

app.post('/upload', upload.single('zipfile'), async (req, res) => {
  const { repo, username, email, token, commitMessage } = req.body;
  const zipPath = req.file.path;

  // Extract zip
  const extractPath = path.join(__dirname, 'repo_temp');
  if (fs.existsSync(extractPath)) fs.rmSync(extractPath, { recursive: true, force: true });
  fs.mkdirSync(extractPath);

  try {
    const zip = new AdmZip(zipPath);
    zip.extractAllTo(extractPath, true);

    // Setup Git
    const git = simpleGit(extractPath);
    await git.init();
    await git.addConfig('user.email', email);
    await git.addConfig('user.name', username);
    await git.add('.');
    await git.commit(commitMessage);

    // Push using token
    const authRepoUrl = repo.replace('https://', `https://${token}@`);
    await git.addRemote('origin', authRepoUrl);
    await git.push('origin', 'master', { '--force': null });

    res.send('Files pushed successfully!');
  } catch (err) {
    console.error(err);
    res.status(500).send('Error: ' + err.message);
  } finally {
    fs.unlinkSync(zipPath);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));