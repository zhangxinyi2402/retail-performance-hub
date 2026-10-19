/* Single display-data source. Phase 1 samples are illustrative, not reconciled financial records. */
window.RPH_DATA = {
 brand:'Blancpain', brandShortName:'BP', store:'Shenzhen MixC', storeZh:'深圳万象城', month:'December', year:2023, currency:'CNY',
 sales:8857000, units:37, averageTicket:239378, salesYoY:3.3, unitsYoY:-36.2, averageTicketYoY:61.9, targetAchievement:110.7,
 highValue:{units:15,share:40.5,ruleNote:'Demo rule for current sample only. High-value thresholds become configurable in Phase 2.'},
 traffic:{visitors:509,groups:271,tryOnRate:79,leadRate:21,conversionRate:15,male:49,female:51,ages:[{label:'<30',value:16},{label:'30–39',value:36},{label:'40–49',value:31},{label:'50+',value:17}]},
 products:[{name:'Fifty Fathoms',collectionId:'fifty-fathoms',sales:3254000,share:45.4,averageTicket:325400},{name:'Villeret',collectionId:'villeret',sales:2261200,share:31.5,averageTicket:226120},{name:'Women',collectionId:'women',sales:1653500,share:23.1,averageTicket:183722}],
 priceBands:[{label:'20–30W',value:13},{label:'30–50W',value:0},{label:'50–100W',value:0},{label:'100W+',value:2}],
 competitors:[{name:'VC',sales:10200000,units:33,averageTicket:309091},{name:'BP',sales:8857000,units:37,averageTicket:239378},{name:'JLC',sales:1790000,units:14,averageTicket:127857}],
 ranks:[{label:'Sales Rank',value:2},{label:'Units Rank',value:1},{label:'Avg Ticket Rank',value:2}],
 customers:[{label:'Repeat Customer',value:22},{label:'Previous Prospect',value:38},{label:'Walk-in',value:40}],
 // Cai Bing uses the supplied sample. Other staff figures and all qualitative notes are demo-only mock values.
 staff:[
 {name:'蔡冰',english:'Cai Bing',sales:2866000,units:9,averageTicket:318444,target:179,highValue:3,tryOnRate:84,leadRate:22,conversionRate:20,strength:'High average ticket · Strong repeat-customer contribution',opportunity:'Lead capture'},
 {name:'杨贝贝',english:'Yang Beibei',sales:2250000,units:10,averageTicket:225000,target:125,highValue:5,tryOnRate:80,leadRate:24,conversionRate:16,strength:'Consistent client follow-up',opportunity:'High-value appointments'},
 {name:'黄小霞',english:'Huang Xiaoxia',sales:1980000,units:9,averageTicket:220000,target:110,highValue:4,tryOnRate:76,leadRate:20,conversionRate:14,strength:'Strong product storytelling',opportunity:'Prospect conversion'},
 {name:'谭月园',english:'Tan Yueyuan',sales:1761000,units:9,averageTicket:195667,target:97.8,highValue:3,tryOnRate:75,leadRate:18,conversionRate:12,strength:'Steady walk-in engagement',opportunity:'Average ticket growth'}],
 readiness:78,
 statuses:[{name:'Sales Data',count:'37 transactions',status:'Complete',updated:'28 Dec 2023 · 18:42'},{name:'Traffic',count:'509 visitors',status:'Complete',updated:'28 Dec 2023 · 18:35'},{name:'Staff KPI',count:'4 staff',status:'Complete',updated:'28 Dec 2023 · 17:50'},{name:'Competitor',count:'2/3 brands',status:'Missing JLC',updated:'27 Dec 2023 · 16:20',warning:true},{name:'Campaign',count:'2 modules',status:'Complete',updated:'26 Dec 2023 · 12:10'}],
 issues:['Missing competitor data','1 record without customer type','1 staff target missing'],
 // Annual trend, YTD, funnel, campaign, and demographics are demo-only mock values.
 ytdSales:71800000,ytdYoY:-11,
 trend:[{label:'Jan',value:4.5},{label:'Feb',value:5.2},{label:'Mar',value:6.8},{label:'Apr',value:5.6},{label:'May',value:6.4},{label:'Jun',value:5.1},{label:'Jul',value:6.2},{label:'Aug',value:5.8},{label:'Sep',value:7.3},{label:'Oct',value:5.9},{label:'Nov',value:6.7},{label:'Dec',value:8.857}],
 funnel:[{label:'Reception Groups',value:271,rate:79},{label:'Try-on',value:214,rate:27},{label:'Lead Captured',value:58,rate:69},{label:'Sales',value:40}],
 comparison:[{label:'Try-on',before:68,after:79},{label:'Lead',before:22,after:21},{label:'Conversion',before:11,after:15}],
 campaign:{title:'Christmas Afternoon Tea',date:'23—24 DEC',invited:22,attended:4,sales:4,attributedSales:891500},
 insights:{executive:'Average ticket increased significantly, offsetting lower unit sales.',sales:'Sales grew 3.3% year on year as higher average ticket offset lower volume.',highValue:'High-value pieces represent 40.5% of units in this sample.',product:'Fifty Fathoms leads the supplied series mix at 45.4%.',customer:'Walk-in customers form the largest share of the sample customer mix.',funnel:'Try-on improved to 79%; lead capture remains a focus.',staff:'Cai Bing leads sample sales with a 179% target achievement.',competitor:'Blancpain ranks second in sales and first in units in this sample.',campaign:'Four attended groups generated ¥891.5K in attributed sample sales.'},
 disclosure:'PHASE 1.5 · MOCK DATA',
 caveat:'Illustrative sample. Series figures, funnel and data-health states are independent mock snapshots; no reconciliation or business calculation is performed.'
};

/* Phase 1.5 display configuration and bilingual content. All additions are demo-only mock.
   Themes and module visibility are mutable only in this document's memory. */
Object.assign(window.RPH_DATA, {
  brandTheme:{brandPrimary:'#B39A6B',brandDark:'#111111',brandLight:'#F4F1EA'},
  collectionTheme:[
    {id:'fifty-fathoms',name:'Fifty Fathoms',nameZh:'五十噚',color:'#17364D'},
    {id:'villeret',name:'Villeret',nameZh:'经典系列',color:'#B39A6B'},
    {id:'women',name:'Women',nameZh:'女装系列',color:'#9B7771'},
    {id:'other',name:'Other',nameZh:'其他',color:'#8B8982'}
  ],
  workbenchModules:[
    {id:'executive',label:'executive',type:'kpiCard',width:'full',detail:'sales'},
    {id:'trend',label:'salesTrend',type:'trend',width:'wide',detail:'sales'},
    {id:'highValue',label:'highValue',type:'kpiCard',width:'third',detail:'sales'},
    {id:'product',label:'productMix',type:'distribution',width:'third',detail:'product'},
    {id:'customer',label:'customer',type:'distribution',width:'third',detail:'customer'},
    {id:'traffic',label:'traffic',type:'kpiCard',width:'third',detail:'customer'},
    {id:'staff',label:'staffPerformance',type:'ranking',width:'wide',detail:'staff'},
    {id:'competitor',label:'competitor',type:'ranking',width:'third',detail:'competitor'},
    {id:'monthly',label:'monthlyHighlight',type:'content',width:'full',detail:'monthly-review'}
  ],
  blockLibrary:[
    {id:'kpiCard',description:'kpiDesc',symbol:'01'}, {id:'trend',description:'trendDesc',symbol:'↗'},
    {id:'distribution',description:'distributionDesc',symbol:'≋'}, {id:'ranking',description:'rankingDesc',symbol:'≡'},
    {id:'funnelBlock',description:'funnelDesc',symbol:'▽'}, {id:'content',description:'contentDesc',symbol:'Aa'},
    {id:'table',description:'tableDesc',symbol:'▤'}, {id:'custom',description:'customDesc',symbol:'+'}
  ],
  salesMom:{sales:8.6,units:-5.1,averageTicket:14.4,target:6.2},
  productDimensions:{
    material:[{name:{zh:'精钢',en:'Steel'},share:48},{name:{zh:'红金',en:'Red Gold'},share:34},{name:{zh:'其他材质',en:'Other Materials'},share:18}],
    function:[{name:{zh:'潜水',en:'Diving'},share:45.4},{name:{zh:'经典正装',en:'Classic Dress'},share:31.5},{name:{zh:'复杂功能',en:'Complications'},share:23.1}],
    gender:[{name:{zh:'男士腕表',en:'Men’s Watches'},share:76.9},{name:{zh:'女士腕表',en:'Women’s Watches'},share:23.1}]
  },
  customerDetails:[
    {id:'repeat',name:{zh:'复购顾客',en:'Repeat'},share:22,averageTicket:306000},
    {id:'prospect',name:{zh:'历史潜客转化',en:'Previous Prospect'},share:38,averageTicket:248000},
    {id:'walkin',name:{zh:'自然到店',en:'Walk-in'},share:40,averageTicket:195000}
  ],
  regions:[{name:{zh:'深圳',en:'Shenzhen'},share:64},{name:{zh:'广东其他地区',en:'Rest of Guangdong'},share:23},{name:{zh:'其他地区',en:'Other Regions'},share:13}],
  competitorTrends:[
    {id:'VC',values:[5.8,6.6,7.9,6.2,7.5,6.9,7.8,7.1,8.3,7.4,8.2,10.2]},
    {id:'BP',values:[4.5,5.2,6.8,5.6,6.4,5.1,6.2,5.8,7.3,5.9,6.7,8.857]},
    {id:'JLC',values:[1.1,1.3,1.6,1.2,1.5,1.4,1.6,1.5,1.7,1.4,1.6,1.79]}
  ],
  ruleSamples:[{label:'male',threshold:'≥ ¥200K'},{label:'female',threshold:'≥ ¥150K'},{label:'ultraValue',threshold:'≥ ¥1M'}],
  reportStructure:['executive','sales','product','customerTraffic','staff','competitor','monthlyReview'],
  monthlyContent:[
    {type:'project',title:{zh:'年末客户关系回访',en:'Year-end Client Follow-up'},description:{zh:'梳理重点客户与历史潜客，准备下一轮预约。',en:'Review priority clients and previous prospects for the next appointment cycle.'},status:{zh:'进行中 · 演示项目',en:'In progress · Demo project'}},
    {type:'training',title:{zh:'五十噚产品故事与试戴体验',en:'Fifty Fathoms Storytelling & Try-on'},description:{zh:'围绕核心系列，练习产品表达与试戴服务。',en:'Practice collection storytelling and the in-store try-on experience.'},status:{zh:'本月培训 · 演示内容',en:'Monthly training · Demo content'}},
    {type:'nextFocus',title:{zh:'提高留资质量与高价值预约',en:'Better Leads & High-value Appointments'},description:{zh:'关注试戴后的跟进质量，将经营观察转为下月行动。',en:'Focus on follow-up after try-on and turn this month’s observations into next month’s actions.'},status:{zh:'下月计划 · 演示内容',en:'Next month · Demo focus'}}
  ],
  contentText:{
    campaignTitle:{zh:'圣诞下午茶',en:'Christmas Afternoon Tea'},
    campaignDate:{zh:'12 月 23—24 日',en:'23—24 DEC'},
    campaignDescription:{zh:'以一场克制而温暖的相聚，延续品牌与顾客的关系。',en:'A considered moment of connection, extending the relationship between brand and client.'},
    ruleNote:{zh:'当前样本的高价值阈值仅用于演示，未来可配置。',en:'High-value thresholds in this sample are illustrative and will become configurable.'},
    caveat:{zh:'演示快照：系列金额、漏斗与数据健康状态互相独立，不作业务勾稽校验。',en:'Illustrative snapshots: series totals, funnel and data-health states are independent and are not reconciled.'}
  },
  insightsZh:{executive:'客单价显著提升，抵消了销量下降的影响。',sales:'销售额同比增长 3.3%，更高客单价抵消了销量下滑。',highValue:'高价值腕表在当前样本中占销量的 40.5%。',product:'五十噚以 45.4% 的占比领跑当前系列样本。',customer:'自然到店顾客是当前样本中最大的客群来源。',funnel:'试戴率提升至 79%，留资仍是可关注的环节。',staff:'蔡冰以 179% 的目标完成率领跑样本销售额。',competitor:'在当前样本中，宝珀销售额排名第二、销量排名第一。',campaign:'四组到场顾客带来 ¥891.5K 的关联样本销售额。'},
  staffNotesZh:[
    {strength:'高客单价 · 复购顾客贡献强',opportunity:'提升留资',tag:'高客单价'},
    {strength:'稳定的客户跟进',opportunity:'增加高价值预约',tag:'客户跟进'},
    {strength:'产品故事表达出色',opportunity:'提升潜客转化',tag:'产品表达'},
    {strength:'自然到店互动稳定',opportunity:'提升客单价',tag:'到店接待'}
  ],
  staffTagsEn:['High average ticket','Client follow-up','Product storytelling','Walk-in engagement'],
  statusLabels:['salesAmount','traffic','staffKpi','competitor','monthlyContent'],
  statusRecordsZh:['37 笔交易','509 位访客','4 位员工','2/3 个品牌','2 个板块'],
  statusUpdatedZh:['2023-12-28 · 18:42','2023-12-28 · 18:35','2023-12-28 · 17:50','2023-12-27 · 16:20','2023-12-26 · 12:10'],
  issuesZh:['缺少竞品数据','1 笔记录缺少顾客类型','1 位员工缺少目标'],
});
