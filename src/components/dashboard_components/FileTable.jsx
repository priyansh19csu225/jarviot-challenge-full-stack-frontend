import React from 'react';
import './FileTable.css'; // Import CSS file for styling
import  { bytesToMB } from '../../helper/bytesToGb';

function FileTable({ data }) {
  const openLink = (link) => {
    if (link) {
      window.open(link, '_blank');
    }
  };

  return (
    <div className="table-container">
      <table className="file-table">
        <thead>
          <tr>
            <th>File Name</th>
            <th>Size</th>
            <th>Shared</th>
            <th>Created At</th>
            <th>Modified At</th>
          </tr>
          
        </thead>
        <tbody>
            

          {data?.map((item, index) => (
            <tr key={index} >
              <td onClick={() => openLink(item.webViewLink)} className='filename'>{item.name}</td>
              <td>{item.size ? bytesToMB(item.size) + ' MB' : 'N/A'}</td>
              <td>{item.shared ? 'Yes' : 'No'}</td>
              <td>{item.createdTime ? new Date(item.createdTime).toLocaleDateString() : 'N/A'}</td>
              <td>{item.modifiedTime ? new Date(item.modifiedTime).toLocaleDateString() : 'N/A'}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default FileTable;
