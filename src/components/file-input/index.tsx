import React, { useCallback } from 'react';
import { useDropzone, FileWithPath, DropzoneOptions, Accept } from 'react-dropzone';

interface FileUploadProps {
  onFileUpload: (file: File) => void;
  maxFileSize: number;
}

const FileUpload: React.FC<FileUploadProps> = ({ onFileUpload, maxFileSize }) => {
  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      if (acceptedFiles && acceptedFiles.length > 0) {
        const file = acceptedFiles[0] as File;
        onFileUpload(file);
      }
    },
    [onFileUpload]
  );

  const dropzoneOptions: DropzoneOptions = {
    onDrop,
    accept: '.pdf,.doc,.docx,.jpg,.jpeg,.png,.xls,.xlsx' as unknown as Accept,
    maxSize: maxFileSize,
  };

  const { getRootProps, getInputProps } = useDropzone(dropzoneOptions);

  return (
    <div
      {...getRootProps()}
      style={{ border: '2px dashed #205266', padding: ' 0.8125rem 1rem', textAlign: 'center', borderRadius: '0.25rem' }}
    >
      <input {...getInputProps()} />
      {(
        <p>
          Arraste para dentro ou clique para seleionar um arquivo
        </p>
      )}
    </div>
  );
};

export default FileUpload;
