const lineGraphData = [
  {
    key: 1,
    title: 'JavaScript',
    color: '#E6DF44',
    like: [
      { date: '2021/04/01', value: 0, job: '研修' },
      { date: '2021/05/01', value: 1.1, job: '研修' },
      { date: '2021/06/01', value: 1.1, job: '研修' },
      { date: '2021/07/01', value: 1.1, job: '自動倉庫システム開発' },
      { date: '2021/08/01', value: 1.1, job: '自動倉庫システム開発' },
      { date: '2021/09/01', value: 1.1, job: '自動倉庫システム開発' },
      { date: '2021/10/01', value: 1.1, job: '自動倉庫システム開発' },
      { date: '2021/11/01', value: 1.1, job: '自動倉庫システム開発' },
      { date: '2021/12/01', value: 1.1, job: '自動倉庫システム開発' },
      { date: '2022/01/01', value: 1.1, job: '自動倉庫システム開発' },
      { date: '2022/02/01', value: 1.1, job: '自動倉庫システム開発' },
      { date: '2022/03/01', value: 1.1, job: '自動倉庫システム開発' },
      { date: '2022/04/01', value: 1.1, job: '自動倉庫システム開発' },
      { date: '2022/05/01', value: 1.1, job: '自動倉庫システム開発' },
      { date: '2022/06/01', value: 1.1, job: '自動倉庫システム開発' },
      { date: '2022/07/01', value: 1.1, job: '自動倉庫システム開発' },
      { date: '2022/08/01', value: 1.1, job: '自動倉庫システム開発' },
      { date: '2022/09/01', value: 1.1, job: '自動倉庫システム開発' },
      { date: '2022/10/01', value: 1.1, job: '自動倉庫システム開発' },
      { date: '2022/11/01', value: 1.1, job: '自動倉庫システム開発' },
      { date: '2022/12/01', value: 1.1, job: '自動倉庫システム開発' },
      { date: '2023/01/01', value: 1.1, job: '自動倉庫システム開発' },
      { date: '2023/02/01', value: 1.1, job: '自動倉庫システム開発' },
      { date: '2023/03/01', value: 1.1, job: '自動倉庫システム開発' },
      { date: '2023/04/01', value: 3.1, job: '某証券会社のアプリ制作' },
      { date: '2023/05/01', value: 5.4, job: '某証券会社のアプリ制作' },
      { date: '2023/06/01', value: 6.3, job: '某証券会社のアプリ制作' },
      { date: '2023/07/01', value: 7.3, job: '某証券会社のアプリ制作' },
      { date: '2023/08/01', value: 8.2, job: '某証券会社のアプリ制作' },
      { date: '2023/09/01', value: 10.1, job: '某証券会社のアプリ制作' },
      { date: '2023/10/01', value: 10.3, job: '某証券会社のアプリ制作' },
      { date: '2023/11/01', value: 10.5, job: '某証券会社のアプリ制作' },
      { date: '2023/12/01', value: 10.6, job: '某証券会社のアプリ制作' },
    ],
  },
  {
    key: 2,
    title: 'Java',
    color: '#FF4202',
    like: [
      { date: '2021/04/01', value: 0, job: '研修' },
      { date: '2021/05/01', value: 0, job: '研修' },
      { date: '2021/06/01', value: 1, job: '研修' },
      { date: '2021/07/01', value: 2.2, job: '自動倉庫システム開発' },
      { date: '2021/08/01', value: 2.3, job: '自動倉庫システム開発' },
      { date: '2021/09/01', value: 2.4, job: '自動倉庫システム開発' },
      { date: '2021/10/01', value: 3.5, job: '自動倉庫システム開発' },
      { date: '2021/11/01', value: 3.1, job: '自動倉庫システム開発' },
      { date: '2021/12/01', value: 5.2, job: '自動倉庫システム開発' },
      { date: '2022/01/01', value: 5.6, job: '自動倉庫システム開発' },
      { date: '2022/02/01', value: 5.7, job: '自動倉庫システム開発' },
      { date: '2022/03/01', value: 5.8, job: '自動倉庫システム開発' },
      { date: '2022/04/01', value: 5.9, job: '自動倉庫システム開発' },
      { date: '2022/05/01', value: 5.9, job: '自動倉庫システム開発' },
      { date: '2022/06/01', value: 5.9, job: '自動倉庫システム開発' },
      { date: '2022/07/01', value: 6.2, job: '自動倉庫システム開発' },
      { date: '2022/08/01', value: 7.2, job: '自動倉庫システム開発' },
      { date: '2022/09/01', value: 7.3, job: '自動倉庫システム開発' },
      { date: '2022/10/01', value: 7.4, job: '自動倉庫システム開発' },
      { date: '2022/11/01', value: 8.1, job: '自動倉庫システム開発' },
      { date: '2022/12/01', value: 8.2, job: '自動倉庫システム開発' },
      { date: '2023/01/01', value: 8.3, job: '自動倉庫システム開発' },
      { date: '2023/02/01', value: 8.4, job: '自動倉庫システム開発' },
      { date: '2023/03/01', value: 8.5, job: '自動倉庫システム開発' },
      { date: '2023/04/01', value: 7.6, job: '某証券会社のアプリ制作' },
      { date: '2023/05/01', value: 6.3, job: '某証券会社のアプリ制作' },
      { date: '2023/06/01', value: 6.2, job: '某証券会社のアプリ制作' },
      { date: '2023/07/01', value: 6.1, job: '某証券会社のアプリ制作' },
      { date: '2023/08/01', value: 6, job: '某証券会社のアプリ制作' },
      { date: '2023/09/01', value: 5.6, job: '某証券会社のアプリ制作' },
      { date: '2023/10/01', value: 5.2, job: '某証券会社のアプリ制作' },
      { date: '2023/11/01', value: 4.5, job: '某証券会社のアプリ制作' },
      { date: '2023/12/01', value: 4.3, job: '某証券会社のアプリ制作' },
    ],
  },
  {
    key: 3,
    title: 'CSS',
    color: '#F19D9E',
    like: [
      { date: '2021/04/01', value: 0, job: '研修' },
      { date: '2021/05/01', value: 1.3, job: '研修' },
      { date: '2021/06/01', value: 1.3, job: '研修' },
      { date: '2021/07/01', value: 1.3, job: '自動倉庫システム開発' },
      { date: '2021/08/01', value: 1.3, job: '自動倉庫システム開発' },
      { date: '2021/09/01', value: 1.3, job: '自動倉庫システム開発' },
      { date: '2021/10/01', value: 1.2, job: '自動倉庫システム開発' },
      { date: '2021/11/01', value: 1.2, job: '自動倉庫システム開発' },
      { date: '2021/12/01', value: 1.2, job: '自動倉庫システム開発' },
      { date: '2022/01/01', value: 1.2, job: '自動倉庫システム開発' },
      { date: '2022/02/01', value: 1.2, job: '自動倉庫システム開発' },
      { date: '2022/03/01', value: 1.2, job: '自動倉庫システム開発' },
      { date: '2022/04/01', value: 1.2, job: '自動倉庫システム開発' },
      { date: '2022/05/01', value: 1.2, job: '自動倉庫システム開発' },
      { date: '2022/06/01', value: 1.2, job: '自動倉庫システム開発' },
      { date: '2022/07/01', value: 1.2, job: '自動倉庫システム開発' },
      { date: '2022/08/01', value: 1.1, job: '自動倉庫システム開発' },
      { date: '2022/09/01', value: 1.1, job: '自動倉庫システム開発' },
      { date: '2022/10/01', value: 1.1, job: '自動倉庫システム開発' },
      { date: '2022/11/01', value: 1.1, job: '自動倉庫システム開発' },
      { date: '2022/12/01', value: 1.1, job: '自動倉庫システム開発' },
      { date: '2023/01/01', value: 1, job: '自動倉庫システム開発' },
      { date: '2023/02/01', value: 1, job: '自動倉庫システム開発' },
      { date: '2023/03/01', value: 1, job: '自動倉庫システム開発' },
      { date: '2023/04/01', value: 2, job: '某証券会社のアプリ制作' },
      { date: '2023/05/01', value: 2.4, job: '某証券会社のアプリ制作' },
      { date: '2023/06/01', value: 2.8, job: '某証券会社のアプリ制作' },
      { date: '2023/07/01', value: 3.2, job: '某証券会社のアプリ制作' },
      { date: '2023/08/01', value: 3.4, job: '某証券会社のアプリ制作' },
      { date: '2023/09/01', value: 4.2, job: '某証券会社のアプリ制作' },
      { date: '2023/10/01', value: 4.5, job: '某証券会社のアプリ制作' },
      { date: '2023/11/01', value: 4.6, job: '某証券会社のアプリ制作' },
      { date: '2023/12/01', value: 4.9, job: '某証券会社のアプリ制作' },
    ],
  },
  {
    key: 4,
    title: 'HTML',
    color: '#324851',
    like: [
      { date: '2021/04/01', value: 0, job: '研修' },
      { date: '2021/05/01', value: 1.4, job: '研修' },
      { date: '2021/06/01', value: 1.5, job: '研修' },
      { date: '2021/07/01', value: 1.5, job: '自動倉庫システム開発' },
      { date: '2021/08/01', value: 1.5, job: '自動倉庫システム開発' },
      { date: '2021/09/01', value: 1.5, job: '自動倉庫システム開発' },
      { date: '2021/10/01', value: 1.5, job: '自動倉庫システム開発' },
      { date: '2021/11/01', value: 1.5, job: '自動倉庫システム開発' },
      { date: '2021/12/01', value: 1.5, job: '自動倉庫システム開発' },
      { date: '2022/01/01', value: 1.5, job: '自動倉庫システム開発' },
      { date: '2022/02/01', value: 1.4, job: '自動倉庫システム開発' },
      { date: '2022/03/01', value: 1.4, job: '自動倉庫システム開発' },
      { date: '2022/04/01', value: 1.4, job: '自動倉庫システム開発' },
      { date: '2022/05/01', value: 1.4, job: '自動倉庫システム開発' },
      { date: '2022/06/01', value: 1.3, job: '自動倉庫システム開発' },
      { date: '2022/07/01', value: 1.3, job: '自動倉庫システム開発' },
      { date: '2022/08/01', value: 1.3, job: '自動倉庫システム開発' },
      { date: '2022/09/01', value: 1.3, job: '自動倉庫システム開発' },
      { date: '2022/10/01', value: 1.3, job: '自動倉庫システム開発' },
      { date: '2022/11/01', value: 1.3, job: '自動倉庫システム開発' },
      { date: '2022/12/01', value: 1.3, job: '自動倉庫システム開発' },
      { date: '2023/01/01', value: 1.2, job: '自動倉庫システム開発' },
      { date: '2023/02/01', value: 1.2, job: '自動倉庫システム開発' },
      { date: '2023/03/01', value: 1.2, job: '自動倉庫システム開発' },
      { date: '2023/04/01', value: 2.3, job: '某証券会社のアプリ制作' },
      { date: '2023/05/01', value: 3.3, job: '某証券会社のアプリ制作' },
      { date: '2023/06/01', value: 3.4, job: '某証券会社のアプリ制作' },
      { date: '2023/07/01', value: 3.6, job: '某証券会社のアプリ制作' },
      { date: '2023/08/01', value: 4.3, job: '某証券会社のアプリ制作' },
      { date: '2023/09/01', value: 5.3, job: '某証券会社のアプリ制作' },
      { date: '2023/10/01', value: 5.4, job: '某証券会社のアプリ制作' },
      { date: '2023/11/01', value: 5.5, job: '某証券会社のアプリ制作' },
      { date: '2023/12/01', value: 5.6, job: '某証券会社のアプリ制作' },
    ],
  },
  {
    key: 5,
    title: 'SQL',
    color: '#763626',
    like: [
      { date: '2021/04/01', value: 0, job: '研修' },
      { date: '2021/05/01', value: 1.2, job: '研修' },
      { date: '2021/06/01', value: 2.1, job: '研修' },
      { date: '2021/07/01', value: 2.1, job: '自動倉庫システム開発' },
      { date: '2021/08/01', value: 2.2, job: '自動倉庫システム開発' },
      { date: '2021/09/01', value: 2.6, job: '自動倉庫システム開発' },
      { date: '2021/10/01', value: 3.3, job: '自動倉庫システム開発' },
      { date: '2021/11/01', value: 3.4, job: '自動倉庫システム開発' },
      { date: '2021/12/01', value: 3.5, job: '自動倉庫システム開発' },
      { date: '2022/01/01', value: 3.6, job: '自動倉庫システム開発' },
      { date: '2022/02/01', value: 3.7, job: '自動倉庫システム開発' },
      { date: '2022/03/01', value: 3.7, job: '自動倉庫システム開発' },
      { date: '2022/04/01', value: 3.7, job: '自動倉庫システム開発' },
      { date: '2022/05/01', value: 3.7, job: '自動倉庫システム開発' },
      { date: '2022/06/01', value: 3.7, job: '自動倉庫システム開発' },
      { date: '2022/07/01', value: 3.8, job: '自動倉庫システム開発' },
      { date: '2022/08/01', value: 3.8, job: '自動倉庫システム開発' },
      { date: '2022/09/01', value: 3.8, job: '自動倉庫システム開発' },
      { date: '2022/10/01', value: 3.8, job: '自動倉庫システム開発' },
      { date: '2022/11/01', value: 3.8, job: '自動倉庫システム開発' },
      { date: '2022/12/01', value: 3.8, job: '自動倉庫システム開発' },
      { date: '2023/01/01', value: 3.8, job: '自動倉庫システム開発' },
      { date: '2023/02/01', value: 3.8, job: '自動倉庫システム開発' },
      { date: '2023/03/01', value: 3.9, job: '自動倉庫システム開発' },
      { date: '2023/04/01', value: 3.9, job: '某証券会社のアプリ制作' },
      { date: '2023/05/01', value: 3.9, job: '某証券会社のアプリ制作' },
      { date: '2023/06/01', value: 3.5, job: '某証券会社のアプリ制作' },
      { date: '2023/07/01', value: 3.4, job: '某証券会社のアプリ制作' },
      { date: '2023/08/01', value: 3.4, job: '某証券会社のアプリ制作' },
      { date: '2023/09/01', value: 3.3, job: '某証券会社のアプリ制作' },
      { date: '2023/10/01', value: 3.3, job: '某証券会社のアプリ制作' },
      { date: '2023/11/01', value: 3.2, job: '某証券会社のアプリ制作' },
      { date: '2023/12/01', value: 3.1, job: '某証券会社のアプリ制作' },
    ],
  },
  {
    key: 6,
    title: 'TypeScript',
    color: '#1995AD',
    like: [
      { date: '2023/03/01', value: 0, job: '某証券会社のアプリ制作' },
      { date: '2023/04/01', value: 1.4, job: '某証券会社のアプリ制作' },
      { date: '2023/05/01', value: 2.5, job: '某証券会社のアプリ制作' },
      { date: '2023/06/01', value: 2.7, job: '某証券会社のアプリ制作' },
      { date: '2023/07/01', value: 4.4, job: '某証券会社のアプリ制作' },
      { date: '2023/07/01', value: 4.4, job: '某証券会社のアプリ制作' },
      { date: '2023/08/01', value: 4.5, job: '某証券会社のアプリ制作' },
      { date: '2023/09/01', value: 4.6, job: '某証券会社のアプリ制作' },
      { date: '2023/10/01', value: 4.7, job: '某証券会社のアプリ制作' },
      { date: '2023/11/01', value: 4.8, job: '某証券会社のアプリ制作' },
      { date: '2023/12/01', value: 5.2, job: '某証券会社のアプリ制作' },
    ],
  },
];

export { lineGraphData };
