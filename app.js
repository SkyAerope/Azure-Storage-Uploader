const express = require('express');
const bodyParser = require('body-parser');
const azure = require('azure-storage');

const app = express();
app.use(bodyParser.json());

const storageAccount = process.env.ACC || 'your_storage_account_name';
const storageAccessKey = process.env.AK || 'your_storage_access_key';
const containerName = process.env.NAME || 'your_container_name';
const PORT = process.env.PORT || 3000;

// 创建 Azure Blob 存储客户端
const blobService = azure.createBlobService(storageAccount, storageAccessKey);

app.post('/upload', (req, res) => {
  const url = req.body.url;

  // 从 URL 下载文件并上传至 Azure Blob 存储
  const fileName = `${Date.now()}.txt`;

  blobService.createBlockBlobFromText(containerName, fileName, url, (error) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ error: '文件上传失败' });
    }

    const fileUrl = blobService.getUrl(containerName, fileName);
    res.status(200).json({ message: '文件上传成功', fileUrl });
  });
});

// 启动服务器
app.listen(PORT, () => {
  console.log('服务器已启动，监听端口' + PORT);
});
