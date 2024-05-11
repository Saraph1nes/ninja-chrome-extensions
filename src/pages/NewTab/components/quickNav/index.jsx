// import React, { useEffect, useState } from 'react';
// import { Button, Divider, Form, Input, List, message, Modal, Select, Tag, Tooltip } from 'antd';
// import { setLocalStorageItem, getLocalStorageItem } from '@/common/utils/handleLocalStorage';
// import { SmallDashOutlined, PlusOutlined, CloseOutlined } from '@ant-design/icons';
// import { defaultQuickNavList, quickNavColorMap } from './constant';
//
// import './index.less';
//
// const SearchPanel = () => {
//   const [form] = Form.useForm();
//   const [quickNavList, setQuickNavList] = useState([]);
//   const [isModalVisible, setModalVisible] = useState(false);
//   const [addNew, setAddNew] = useState(false);// 控制Form展示
//   const [canAdd, setCanAdd] = useState(true); // 根据个数判断能否增加新item
//   const [editItem, setEditItem] = useState(null);// 编辑item
//
//   useEffect(() => {
//     let item = getLocalStorageItem('quickNavList');
//     if (item) {
//       setQuickNavList(JSON.parse(item));
//     } else {
//       setQuickNavList(defaultQuickNavList);
//       setLocalStorageItem('quickNavList', JSON.stringify(defaultQuickNavList));
//     }
//   }, []);
//
//   useEffect(() => {
//     if (quickNavList.length > 9) {
//       setCanAdd(false);
//     } else {
//       setCanAdd(true);
//     }
//   }, [quickNavList]);
//
//   const submit = (e) => {
//     let res = JSON.parse(getLocalStorageItem('quickNavList'));
//     try {
//       if (editItem) {
//         res.map((v, i) => {
//           if (v.title === editItem.title && v.url === editItem.url) {
//             res.splice(i, 1, e);
//           }
//         });
//         setLocalStorageItem('quickNavList', JSON.stringify(res));
//         setQuickNavList(res);
//         message.success('修改成功');
//       } else {
//         res.push(e);
//         setLocalStorageItem('quickNavList', JSON.stringify(res));
//         setQuickNavList(res);
//         message.success('增加成功');
//       }
//     } catch (e) {
//       console.error(e);
//     } finally {
//       setEditItem(null);
//       setAddNew(false);
//       form.resetFields();
//     }
//   };
//
//   const linkItemEdit = (item, index) => {
//     try {
//       setEditItem(item);
//       setAddNew(true);
//       form.setFieldsValue(item);
//     } catch (e) {
//       console.error(e);
//     }
//   };
//
//   const linkItemAdd = (item, index) => {
//     try {
//       let res = JSON.parse(getLocalStorageItem('quickNavList'));
//       res.splice(index, 1);
//       setLocalStorageItem('quickNavList', JSON.stringify(res));
//       setQuickNavList(res);
//       message.success('删除成功');
//     } catch (e) {
//       console.error(e);
//     }
//   };
//
//   return (
//     <React.Fragment>
//       <div className='quick-nav'>
//         <div className='quick-nav-list'>
//           <span className='quick-nav-list-header'>快捷导航：</span>
//           {quickNavList.map((item, index) => {
//             return (
//               <Tag color={quickNavColorMap[index % 10] || 'magenta'}
//                    key={index}
//                    className='quick-nav-list-item'>
//                 <a style={{ display: 'flex' }}
//                    href={item.url}
//                    target='_blank'
//                    rel='noreferrer'>
//                   <span className='title'>{item.title}</span>
//                 </a>
//               </Tag>
//             );
//           })}
//           <Tag className='quick-nav-list-more'
//                onClick={() => {
//                  setModalVisible(true);
//                }}>
//             <SmallDashOutlined />
//           </Tag>
//         </div>
//       </div>
//       <Modal
//         centered
//         className='quick-nav-modal'
//         title={
//           <React.Fragment>
//             <div className='quick-nav-modal-header'>
//               <div
//                 className='quick-nav-modal-header-title'
//               >
//                 <h3>快捷导航</h3>
//               </div>
//               {!addNew && canAdd && <Tooltip title='新增'>
//                 <Button
//                   type='primary'
//                   shape='circle'
//                   icon={<PlusOutlined />}
//                   onClick={() => {
//                     setAddNew(true);
//                     form.resetFields();
//                   }}
//                   className='actionBtn' />
//               </Tooltip>}
//               {addNew && <Tooltip title='取消'>
//                 <Button
//                   shape='circle'
//                   icon={<CloseOutlined />}
//                   onClick={() => {
//                     setAddNew(false);
//                     setEditItem(null);
//                   }}
//                   className='actionBtn' />
//               </Tooltip>}
//             </div>
//           </React.Fragment>
//         }
//         visible={isModalVisible}
//         onCancel={() => {
//           setModalVisible(false);
//         }}
//         closable={false}
//         footer={null}
//         afterClose={() => {
//           setAddNew(false);
//           setEditItem(null);
//         }}
//       >
//         <div className='add-new-link-area'
//              style={addNew ? {} : { display: 'none' }}>
//
//           <Form
//             form={form}
//             labelCol={{ span: 4 }}
//             wrapperCol={{ span: 20 }}
//             onFinish={submit}>
//             <Form.Item name='url'
//                        labelAlign='right'
//                        required
//                        label='URL'
//                        colon
//                        rules={[{ required: true, type: 'url', message: '请输入正确的URL' }]}>
//               <Input placeholder='请输入链接地址' />
//             </Form.Item>
//             <Form.Item name='title'
//                        required
//                        labelAlign='right'
//                        label='名称'
//                        colon
//                        rules={[{ required: true, message: '请输入名称' }]}>
//               <Input placeholder='请输入名称' />
//             </Form.Item>
//             <Form.Item wrapperCol={{ offset: 4, span: 20 }}>
//               <Button htmlType='submit'
//                       type='primary'>{editItem ? '确认修改' : '确认新增'}</Button>
//             </Form.Item>
//           </Form>
//           <Divider />
//         </div>
//         <List className='link-list-area'
//               itemLayout='horizontal'
//               dataSource={quickNavList}
//               renderItem={(item, index) => (
//                 <List.Item actions={[<a key='list-loadmore-edit'
//                                         onClick={() => linkItemEdit(item, index)}>编辑</a>, <a onClick={() => linkItemAdd(item, index)}
//                                                                                              key='list-loadmore-more'>删除</a>]}>
//                   <List.Item.Meta title={<a target='_blank'
//                                             href={item.url}
//                                             rel='noreferrer'>{item.title}</a>}
//                                   description={item.url}
//                   />
//                 </List.Item>
//               )} />
//       </Modal>
//     </React.Fragment>
//   );
// };
//
// export default SearchPanel;
