// import React from 'react';
// import { Avatar, Card, Col, Divider, List, Row, Select } from 'antd';
//
// import './index.less';
// import ezrToolsConfList from './ezr-tools-conf-front-end.json';
//
// const { Option } = Select;
//
// const Index = () => {
//
//   return (
//     <div className='main-left'>
//       <Card
//         className='main-left-card'
//         title='EZR工具'
//         extra={
//           <Select defaultValue='前端'>
//             <Option value='qianduan'>前端</Option>
//           </Select>
//         }>
//         <div className='main-left-card-list'>
//           <List
//             grid={{
//               gutter: 16,
//               xs: 1,
//               sm: 1,
//               md: 1,
//               lg: 1,
//               xl: 1,
//               xxl: 1
//             }}
//             dataSource={ezrToolsConfList}
//             renderItem={item => (
//               <List.Item>
//                 <Card className='main-left-card-item'
//                       bordered
//                       hoverable>
//                   <a target='_blank'
//                      title={item.remark}
//                      href={item.url}
//                      rel='noreferrer'
//                      className='item-wrapper'>
//                     <img height={48}
//                          width={48}
//                          src={item.img}
//                          title={item.desc}
//                     />
//                     <div className='item-wrapper-text-content'>
//                       <div className='item-wrapper-text-content-title'>
//                         {item.title}
//                       </div>
//                       <div className='item-wrapper-text-content-desc'>
//                         {item.desc}
//                       </div>
//                     </div>
//                   </a>
//                 </Card>
//               </List.Item>
//             )}
//           />
//           <Divider plain>到底了🤐</Divider>
//         </div>
//       </Card>
//     </div>
//   );
// };
//
// export default Index;
