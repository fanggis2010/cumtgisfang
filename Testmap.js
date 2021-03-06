(function() {
	/**此处为地图部分特有引用*/
	require.config({
		paths: {
			echarts: 'js'
		},
		packages: [{
			name: 'BMap',
			location: 'src',
			main: 'main'
		}]
	});
	/**此处同报表*/
	require([
		'echarts', 
		'BMap', 
		'echarts/chart/map', 
		'echarts/chart/pie',
		'echarts/chart/bar',
		'echarts/chart/line'
	],

	function(echarts, BMapExtension) {
/**以下为初始化地图及容器*/

		var BMapExt = new BMapExtension($('#main')[0], BMap, echarts);//定义一张地图报表
		var map = BMapExt.getMap();//初始化地图
		var container = BMapExt.getEchartsContainer();//定义一个容器
		map.centerAndZoom(new BMap.Point(114.363319,30.558732), 11);//设置地图中心及地图等级
		map.enableScrollWheelZoom(true);//允许滚轮滑动
		var mapStyle = {
			features: ["road", "building", "water", "land"],
			style: "midnight"
		}//定义一个主题
		map.setMapStyle(mapStyle);//设置地图主题
<!-- ------------------------------------------------------------------------------------------ -->
/**以下为地图配置项*/
option = {
			title: {
				text: '',
				x: 'center',
				textStyle: {
					color: '#FFFFFF',
					fontSize: 40
				}
			},
			series: [
			/**第一步,声明每个点的坐标*/
			{
				type: 'map',
				mapType: 'none',
				data: [],
				geoCoord: {
					'1': [114.275931,30.6247],
					'2': [114.336298,30.643592],
					'3': [114.366768,30.620722],
					'4': [114.384878,30.590261],
					'5': [114.363319,30.558732],
					'6': [114.356132,30.51755],
					'7': [114.318188,30.530491],
					'8': [114.256097,30.545919],
					'9': [114.215853,30.564081],
					'10': [114.234825,30.591691],
					'11': [114.239424,30.612828]
				}
			},
			/**第二步,绘制动态图层图层*/
			{
				name: '1',
				type: 'map',
				mapType: 'none',
				data: [],
				/**绘制线*/
				markLine: {
					smoothness :0.1,
					smooth: true,
					effect: {
						show: true,
						scaleSize: 1,
						period: 30,
						color: '#fff',
						shadowBlur: 10
					},
					itemStyle: {
						normal: {
							lineStyle : {
								type: 'solid',
								width: 2
							},
							label:{
								show: false
							}
						}
					},
					data: [
						/**线的格式为[{name:O点名称},{name:D点名称,value:数值}]*/
						[{name: '1'}, {name: '2',value:63513.7667245968}],
						[{name: '2'}, {name: '3',value:38619.1963102198}],
						[{name: '3'}, {name: '4',value:658.528924214724}],
						[{name: '4'}, {name: '5',value:1621.41233090065}],
						[{name: '5'}, {name: '6',value:67647.3234376935}],
						[{name: '6'}, {name: '7',value:434447.97294492}],
						[{name: '7'}, {name: '8',value:13948.0171708144}],
						[{name: '8'}, {name: '9',value:432.037875539103}],
						[{name: '9'}, {name: '10',value:70033.972575115}],
						[{name: '10'}, {name: '11',value:91907.9814365361}],
						[{name: '11'}, {name: '1',value:270206.58875563}]
					]
				},
				/**绘制点*/
//				markPoint: {
//					symbol: 'emptyCircle',
//					symbolSize: function(v) {
//						return 8 + v / 100000
//					},
//					effect: {
//						show: true,
//						shadowBlur: 0
//					},
//					itemStyle: {
//						normal: {
//							label: {
//								show: false
//							}
//						},
//						emphasis: {
//							label: {
//								show: false
//							}
//						}
//					},
//					data: [
//						/**点的格式为{name:名称,value:数值}*/
//						{name: '宝山区',value:63513.7667245968}, 
//						{name: '长宁区',value:38619.1963102198}, 
//						{name: '崇明县',value:658.528924214724}, 
//						{name: '奉贤区',value:1621.41233090065}, 
//						{name: '虹口区',value:67647.3234376935}, 
//						{name: '黄浦区',value:434447.97294492}, 
//						{name: '嘉定区',value:13948.0171708144}, 
//						{name: '金山区',value:432.037875539103}, 
//						{name: '静安区',value:70033.972575115}, 
//						{name: '闵行区',value:91907.9814365361}, 
//						{name: '浦东新',value:270206.58875563}, 
//						{name: '普陀区',value:57545.7106896492}, 
//						{name: '青浦区',value:2448.92672993137}, 
//						{name: '松江区',value:11590.7073387088}, 
//						{name: '徐汇区',value:108139.762696292}, 
//						{name: '杨浦区',value:64053.4360647006}, 
//						{name: '闸北区',value:79634.6103871287}
//					]
//				}
			}
		]
		};	
		BMapExt.initECharts(container);//将地图放置在对应的容器内
		BMapExt.setOption(option);//将地图配置项赋给地图
	});
})();