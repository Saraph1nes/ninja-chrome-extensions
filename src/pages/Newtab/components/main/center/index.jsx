// import React, { useContext, useEffect, useState } from 'react';
// import { Button, Card, Col, Divider, Empty, List, Row, Select, Skeleton, Spin, Statistic } from 'antd';
// import { LikeOutlined, CommentOutlined } from '@ant-design/icons';
// import moment from 'moment';
// import { observer, inject } from 'mobx-react';
// import Masonry from 'react-masonry-css';
// import InfiniteScroll from 'react-infinite-scroll-component';
// import { getLocalStorageItem, setLocalStorageItem } from '@/common/utils/handleLocalStorage';
//
// import './index.less';
//
// const { Option } = Select;
//
// const Index = (props) => {
//   const { juejinApi, ezrYuQueApi, jjsApi } = props.MainCenterStore;
//
//   const [param, setParam] = useState({
//     category: 'all',
//     limit: 30,
//     offset: 0,
//     order: 'heat'
//   });
//   const [juejinDataList, setJuejinDataList] = useState([]);
//   const [jjsDataList, setJJSDataList] = useState([]);
//   const [juejinLoading, setJuejinLoading] = useState(false);
//   const [articleType, setArticleType] = useState(getLocalStorageItem('main-article-type') || 'JJS');
//   const [juejinHasMore, setJuejinHasMore] = useState(true);
//
//   /**
//    * 掘金加载更多文章钩子
//    */
//   useEffect(() => {
//     switch (articleType) {
//       case('gold'): {
//         goldLoadMoreData();
//         break;
//       }
//       case('JJS'): {//惊觉社
//         fetchJJSApi();
//         break;
//       }
//       default: {
//         break;
//       }
//     }
//     return setLocalStorageItem('main-article-type', articleType);
//   }, [param.category, param.order, articleType]);
//
//   const fetchJJSApi = async () => {
//     let res = await jjsApi();
//     setJJSDataList(res?.data?.articleList || []);
//   };
//
//   const goldLoadMoreData = async () => {
//     if (juejinLoading) {
//       return;
//     }
//     try {
//       setJuejinLoading(true);
//       const res = await juejinApi(param);
//       setJuejinDataList(juejinDataList.concat(res.data.data));
//       if (res.data.data.length === 1) {
//         setJuejinHasMore(false);
//       }
//       setParam({
//         ...param,
//         offset: param.offset + param.limit
//       });
//     } finally {
//       setJuejinLoading(false);
//     }
//   };
//
//   const onGoldArticleOrderChange = (value) => {
//     setJuejinDataList([]);
//     setJuejinHasMore(true);
//     setParam({
//       ...param,
//       offset: 0,
//       order: value
//     });
//   };
//
//   const onGoldArticleCategoryChange = (value) => {
//     setJuejinDataList([]);
//     setJuejinHasMore(true);
//     setParam({
//       ...param,
//       offset: 0,
//       category: value
//     });
//   };
//
//   return (
//     <div className='main-center'>
//       <Card className='main-center-card'
//             title='文章推荐'
//             extra={<div>
//               <Select onChange={setArticleType}
//                       defaultValue={articleType}>
//                 <Option value='JJS'>
//                   <span className='titleSpan'>惊觉社</span>
//                 </Option>
//                 <Option value='gold'>
//                   <span className='titleSpan'>掘金</span>
//                 </Option>
//                 <Option disabled
//                         value='ezr'>
//                   <span className='titleSpan'>驿氪</span>
//                 </Option>
//               </Select>
//               {articleType === 'ezr' && (
//                 <Select style={{ marginLeft: '10px' }}
//                         value={'group'}
//                         dropdownMatchSelectWidth={false}
//                 >
//                   <Option value='group'>小组分享</Option>
//                   <Option value='my'>我的</Option>
//                 </Select>
//               )}
//               {articleType === 'gold' && (
//                 <Select style={{ marginLeft: '10px' }}
//                         value={param.category}
//                         dropdownMatchSelectWidth={false}
//                         onChange={onGoldArticleCategoryChange}
//                 >
//                   <Option value='all'>首页</Option>
//                   <Option value='frontend'>前端</Option>
//                   <Option value='backend'>后端</Option>
//                   <Option value='android'>Android</Option>
//                   <Option value='ios'>IOS</Option>
//                   <Option value='ai'>人工智能</Option>
//                   <Option value='article'>阅读</Option>
//                   <Option value='freebie'>开发工具</Option>
//                   <Option value='career'>代码人生</Option>
//                 </Select>
//               )}
//               {articleType === 'gold' && (
//                 <Select
//                   style={{ marginLeft: '10px' }}
//                   value={param.order}
//                   onChange={onGoldArticleOrderChange}
//                 >
//                   <Option value='heat'>最热</Option>
//                   <Option value='time'>最新</Option>
//                 </Select>
//               )}
//             </div>}
//       >
//         {
//           articleType === 'ezr' && <div className='main-center-card-list'>123</div>
//         }
//         {
//           articleType === 'gold' && <div id='juejinScrollableDiv'
//                                          className='main-center-card-list'>
//             <InfiniteScroll
//               dataLength={juejinDataList.length}
//               next={goldLoadMoreData}
//               hasMore={juejinHasMore}
//               loader={<div style={{ textAlign: 'center' }}><Spin /></div>}
//               endMessage={<Divider plain>到底了🤐</Divider>}
//               scrollableTarget='juejinScrollableDiv'
//               scrollThreshold='50px'
//             >
//               <List
//                 grid={{
//                   gutter: 16,
//                   xs: 1,
//                   sm: 1,
//                   md: 1,
//                   lg: 1,
//                   xl: 2,
//                   xxl: 3
//                 }}
//                 dataSource={juejinDataList}
//                 renderItem={item => (
//                   <List.Item>
//                     <Card
//                       className='main-center-card-list-item'
//                       hoverable>
//                       <a
//                         className='repoContent'
//                         href={item.url}
//                         target='_blank'
//                         rel='noreferrer'>
//
//                         <div className='repoHeader'>
//                       <span title={item.title}
//                             className='titleText'>{item.title}</span>
//                         </div>
//                         <div className='repoMeta'>
//                           <div className='articleInfos'>
//                             {item.tags.map((item, index) => <span className='type'
//                                                                   key={item.id}>{item.tag_name}</span>)}
//                             <span
//                               style={{ marginLeft: '10px' }}>{moment.duration(moment().diff(item.date.iso)).asHours().toFixed(0) <= 24 ?
//                               `${moment.duration(moment().diff(item.date.iso)).asHours().toFixed(0)}小时前` :
//                               `${moment.duration(moment().diff(item.date.iso)).asDays().toFixed(0)}天前`}
//                         </span>
//                           </div>
//                           <div className='interactInfo'>
//                             <Statistic
//                               className='type'
//                               valueStyle={{ fontSize: '13px', color: '#7d7d7f' }}
//                               value={item.collectionCount}
//                               prefix={<LikeOutlined />} />
//                             <Statistic
//                               className='type'
//                               valueStyle={{ fontSize: '13px', color: '#7d7d7f' }}
//                               value={item.commentCount}
//                               prefix={<CommentOutlined />} />
//                           </div>
//                         </div>
//                       </a>
//                     </Card>
//                   </List.Item>
//                 )}
//               />
//             </InfiniteScroll>
//           </div>
//         }
//         {
//           articleType === 'JJS' && <div id='jjsScrollableDiv'
//                                         className='main-center-card-list'>
//             <InfiniteScroll
//               dataLength={jjsDataList.length}
//               next={false}
//               hasMore={false}
//               loader={<div style={{ textAlign: 'center' }}><Spin /></div>}
//               endMessage={<Divider plain>到底了🤐</Divider>}
//               scrollableTarget='jjsScrollableDiv'
//               scrollThreshold='50px'
//             >
//               <Masonry
//                 breakpointCols={{
//                   default: 3,
//                   1800: 2,
//                   1500: 1
//                 }}
//                 className='my-masonry-grid'
//                 columnClassName='my-masonry-grid_column'>
//                 {
//                   jjsDataList.map(item => <Card
//                     key={item._id}
//                     className='main-center-card-list-item'
//                     hoverable>
//                     <a
//                       className='repoContent'
//                       href={`https://leheavengame.com/article/${item._id}`}
//                       target='_blank'
//                       rel='noreferrer'>
//                       <div className='repoHeader'>
//                       <span title={item.title}
//                             className='titleText'>{item.title}</span>
//                       </div>
//                       <div className='repoMeta'>
//                         {item.description}
//                       </div>
//                       {
//                         item.screenshot && <div>
//                           <img
//                             style={{ marginTop: '20px' }}
//                             width='100%'
//                             src={item.screenshot} />
//                         </div>
//                       }
//                     </a>
//                   </Card>)
//                 }
//               </Masonry>
//             </InfiniteScroll>
//           </div>
//         }
//       </Card>
//     </div>
//   );
// };
//
// export default inject('MainCenterStore')(observer(Index));
