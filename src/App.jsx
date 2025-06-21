import './App.css'
import React, { useState } from 'react';
import { Button, Modal, Space } from 'antd';
const App = () => {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <Space>
        <Button type="primary" onClick={showModal}>
          Open Modal
        </Button>
        <Button
          type="primary"
          onClick={() => {
            Modal.confirm({
              title: 'Confirm',
              content: 'Bla bla ...',
              footer: (_, { OkBtn, CancelBtn }) => (
                <>
                  <Button>Custom Button</Button>
                  <CancelBtn />
                  <OkBtn />
                </>
              ),
            });
          }}
        >
          Open Modal Confirm
        </Button>
      </Space>
      <Modal
        open={open}
        title="Title"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={(_, { OkBtn, CancelBtn }) => (
          <>
            <Button>Custom Button</Button>
            <CancelBtn />
            <OkBtn />
          </>
        )}
      >
        <p><img src="https://i1.sndcdn.com/artworks-pYiuoAxpmvV7VIw7-7fJBBQ-t1080x1080.png" alt="" /></p>
        <p>uia ii uia ii uia ii uia ii</p>
        <p>uia ii uia ii uia ii uia ii</p>
        <p>uia ii uia ii uia ii uia ii</p>
        <p>uia ii uia ii uia ii uia ii</p>
      </Modal>
    </>
  );
};
export default App;
