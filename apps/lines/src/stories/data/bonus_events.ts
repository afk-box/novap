export default {
	reveal: {
		type: 'reveal',
		board: [
			[
				{
					name: 'L2',
				},
				{
					name: 'L1',
				},
				{
					name: 'L4',
				},
				{
					name: 'H2',
				},
				{
					name: 'L1',
				},
			],
			[
				{
					name: 'H1',
				},
				{
					name: 'L5',
				},
				{
					name: 'L2',
				},
				{
					name: 'H3',
				},
				{
					name: 'L4',
				},
			],
			[
				{
					name: 'L3',
				},
				{
					name: 'L5',
				},
				{
					name: 'L3',
				},
				{
					name: 'H4',
				},
				{
					name: 'L4',
				},
			],
		],
		paddingPositions: [216, 205, 195],
		gameType: 'basegame',
		anticipation: [0, 0, 0],
	},
	setTotalWin: {
		type: 'setTotalWin',
		amount: 8.0,
	},
	finalWin: {
		type: 'finalWin',
		amount: 0,
	},
	freeSpinTrigger: {
		type: 'freeSpinTrigger',
		totalFs: 10,
		positions: [],
	},
	updateFreeSpin: {
		type: 'updateFreeSpin',
		amount: 1,
		total: 10,
	},
	winInfo: {
		type: 'winInfo',
		totalWin: 8.0,
		wins: [
			{
				symbol: 'H3',
				kind: 3,
				win: 4.0,
				positions: [
					{
						reel: 0,
						row: 1,
					},
					{
						reel: 1,
						row: 1,
					},
					{
						reel: 2,
						row: 1,
					},
				],
				meta: {
					lineIndex: 1,
					multiplier: 1,
					winWithoutMult: 4.0,
					globalMult: 1,
					lineMultiplier: 1.0,
				},
			},
			{
				symbol: 'H3',
				kind: 3,
				win: 4.0,
				positions: [
					{
						reel: 0,
						row: 3,
					},
					{
						reel: 1,
						row: 3,
					},
					{
						reel: 2,
						row: 3,
					},
				],
				meta: {
					lineIndex: 3,
					multiplier: 1,
					winWithoutMult: 4.0,
					globalMult: 1,
					lineMultiplier: 1.0,
				},
			},
		],
	},
	setWin: {
		type: 'setWin',
		amount: 8.0,
		winLevel: 3,
	},
	freeSpinEnd: {
		type: 'freeSpinEnd',
		amount: 16.0,
		winLevel: 4,
	},
};
