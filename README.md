# Azure Stronge Uploader
 一个Node.js API，用于将文件上传至Azure Blob存储

## 安装

1. 克隆项目到本地：

   ```
   git clone https://github.com/SkyAerope/Azure-Storage-Uploader.git
   ```

2. 进入项目目录：

   ```
   cd Azure-Storage-Uploader
   ```

3. 安装项目依赖：

   ```
   npm install
   ```

## 配置

在使用该API之前，您需要进行一些配置：

1. 在Azure上创建一个存储账户和一个Blob容器。获取存储账户名称和访问密钥。

2. 配置信息
   - 法一：打开 `index.js` 文件，将以下内容替换为您自己的Azure存储账户信息：

   ```javascript
    const storageAccount = process.env.ACC || 'your_storage_account_name';
    const storageAccessKey = process.env.AK || 'your_storage_access_key';
    const containerName = process.env.NAME || 'your_container_name';
   ```
    - 法二：定义环境变量，将以下内容添加到您的环境变量中：
    
    ```
    ACC=your_storage_account_name
    AK=your_storage_access_key
    NAME=your_container_name
    ```

## 使用示例

以下是一个使用示例，演示如何通过API将文件上传至Azure Blob存储：

1. 运行API服务器：

   ```
   npm start
   ```

2. 执行示例Python脚本来上传文件：

   ```python
   import requests

   api_url = 'http://localhost:3000/upload'
   file_url = 'http://example.com/file.txt'

   data = {'url': file_url}

   response = requests.post(api_url, json=data)

   if response.status_code == 200:
       print('文件上传成功')
   else:
       print('文件上传失败:', response.json())
   ```

   确保将 `api_url` 替换为实际的API URL，以及 `file_url` 替换为要上传的文件的URL。

    请确保已经安装了Python的`requests`库。

## 注意事项

- 该示例仅演示了基本的文件上传过程，对文件的大小或类型没有进行验证。在实际应用中，您可能需要添加适当的验证和错误处理。

- 请确保您的网络连接正常，并且能够访问Azure Blob存储服务。

- 使用此代码时，请遵循Azure存储的使用规范和安全最佳实践。

- 请确保不要将真实的存储账户名称和访问密钥提交到代码库中，可以使用环境变量或配置文件来保护这些敏感信息。

- 请参考Azure文档以了解更多关于Azure Blob存储的详细信息和用法。
