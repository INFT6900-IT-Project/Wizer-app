import os
from pathlib import Path

from azure.storage.blob import BlobServiceClient
from dotenv import load_dotenv

env_path = Path('') / '.env'
load_dotenv(dotenv_path=env_path)


class AzureConfigs:
    AZURE_STORAGE_CONNECTION_STRING: str = os.getenv('AZURE_STORAGE_CONNECTION_STRING')
    BLOB_CONTAINER: str = os.getenv('BLOB_CONTAINER')
    VIDEOS_CONTAINER_NAME: str = os.getenv('VIDEOS_CONTAINER_NAME')
    PICTURES_CONTAINER_NAME: str = os.getenv('PICTURES_CONTAINER_NAME')


class AzureFileStorage:
    def __init__(self):
        self.blob_service_client = BlobServiceClient.from_connection_string(
            AzureConfigs.AZURE_STORAGE_CONNECTION_STRING)
        self.containers = {
            "video": AzureConfigs.VIDEOS_CONTAINER_NAME,
            "image": AzureConfigs.PICTURES_CONTAINER_NAME,
        }

    # Define the correct container based on file type
    def _get_container_name(self, file_extension: str) -> str:
        if file_extension in [".mp4", ".mov", ".avi"]:
            return self.containers["video"]
        elif file_extension in [".jpg", ".jpeg", ".png", ".gif"]:
            return self.containers["image"]
        else:
            raise ValueError("Unsupported file type")

    # Upload files to appropiate container
    def upload_file(self, file_path: str) -> str:

        # Get file extension
        file_extension = Path(file_path).suffix.lower()

        # Define the container
        container_name = self._get_container_name(file_extension)
        container_client = self.blob_service_client.get_container_client(container_name)

        # File to upload
        blob_name = os.path.basename(file_path)
        blob_client = container_client.get_blob_client(blob_name)
        with open(file_path, "rb") as data:
            blob_client.upload_blob(data, overwrite=True)

        # URL of Uploaded file
        blob_url = blob_client.url
        return blob_url

    def download_file(self, blob_name: str, container_name: str, download_path: str):
        blob_client = self.blob_service_client.get_container_client(container_name).get_blob_client(blob_name)
        with open(download_path, "wb") as download_file:
            download_file.write(blob_client.download_blob().readall())
        return f"{blob_name} downloaded to {download_path}."

    def delete_file(self, blob_name: str, container_name: str):
        blob_client = self.blob_service_client.get_container_client(container_name).get_blob_client(blob_name)
        blob_client.delete_blob()
        return f"{blob_name} deleted from {container_name} in Azure Blob Storage."
