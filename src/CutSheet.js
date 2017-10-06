import React, {Component} from 'react'
import Cut from './Cut'

export default class CutSheet extends Component{
    constructor(){
        super();
        
        const beefParts=[
            {
                name:'head',
                path:`M800 3563 c-14 -2 -29 -8 -33 -13 -12 -11 20 -123 55 -191 34 -68 34
                -71 7 -95 -36 -33 -99 -173 -99 -221 0 -38 -15 -70 -106 -224 -76 -128 -124
                -197 -165 -239 -33 -32 -59 -67 -59 -77 0 -10 13 -34 30 -53 16 -20 29 -47 30
                -62 0 -26 10 -40 54 -76 26 -21 262 -20 303 1 37 20 94 20 216 3 84 -12 89
                -14 135 -59 51 -50 78 -63 161 -79 34 -6 60 -17 71 -30 16 -21 17 -20 92 45
                250 218 388 427 459 697 17 64 22 115 23 205 l1 120 -45 3 c-25 2 -53 10 -62
                19 -9 8 -38 18 -63 20 -44 5 -45 7 -45 40 0 77 -54 143 -117 143 -18 0 -52 -9
                -74 -21 l-41 -20 -15 20 c-21 31 -66 51 -114 51 -23 0 -87 7 -143 16 -56 9
                -125 14 -154 11 -48 -5 -61 -2 -117 29 -63 35 -131 48 -185 37z`
            },
            {
                name:'sirloin',
                path:`M3655 3287 c-209 -4 -390 -9 -402 -12 l-21 -5 24 -77 c79 -250 138
                -510 170 -745 10 -78 21 -128 28 -128 6 0 139 7 296 15 157 8 303 15 326 15
                l41 0 6 158 c8 207 47 501 92 682 27 111 34 102 -80 104 -55 0 -271 -2 -480
                -7z`
            },
            {
                name:'chuck',
                path:`M2295 3279 c-22 -5 -80 -23 -130 -39 -49 -16 -108 -28 -129 -27 l-40
                2 -3 -105 c-11 -342 -172 -649 -488 -924 -38 -34 -73 -65 -77 -70 -14 -20 41
                -110 120 -193 18 -20 35 -53 42 -83 l12 -49 57 29 c32 15 84 36 117 44 71 19
                382 66 440 66 22 0 44 4 50 9 5 5 72 11 150 13 154 3 161 6 189 64 54 114 50
                539 -10 1044 -26 222 -23 214 -75 222 -63 9 -177 8 -225 -3z`
            },
            {
                name:'rib',
                path:`M2627 3283 c-48 -4 -48 -4 -42 -36 14 -79 36 -273 46 -387 13 -164
                12 -162 56 -182 80 -36 252 -32 537 14 l138 22 -6 52 c-3 28 -12 73 -20 100
                -8 27 -23 83 -35 124 -25 94 -78 271 -83 275 -1 2 -77 8 -168 14 -157 10 -319
                12 -423 4z`,
                colorKey: '#8bc34a',
                price: '100$',
                placeholders: {
                    price:{
                        x: 2800,
                        y: -2500
                    }
                }

            },
            {
                name:'rump',
                path:`M4242 3249 c-28 -113 -70 -345 -93 -519 -7 -52 -12 -178 -13 -280 0
                -199 13 -292 60 -447 29 -95 31 -96 139 -68 202 53 342 235 408 530 15 71 20
                140 24 330 4 207 -7 448 -21 462 -4 5 -211 21 -382 30 l-111 5 -11 -43z`
            },
            {
                name:'silverside',
                path:`M4880 3273 c-58 -2 -108 -7 -112 -11 -4 -4 0 -64 8 -132 34 -265 0
                -677 -67 -827 -25 -57 -24 -64 9 -58 99 21 174 38 218 51 28 8 61 14 73 14 12
                0 51 7 86 16 l64 16 -14 32 c-49 112 -91 309 -106 500 -11 123 -6 334 7 384 6
                20 3 22 -27 20 -19 -1 -81 -4 -139 -5z`
            },
            {
                name:'topside',
                path:`M5063 3268 c-4 -7 -10 -102 -11 -210 -4 -222 8 -334 59 -526 38 -145
                58 -195 75 -188 7 3 41 10 76 17 35 6 73 13 85 15 48 9 79 123 76 284 -1 97
                -6 131 -33 219 -38 128 -100 251 -178 354 -35 46 -38 47 -88 47 -31 0 -56 -5
                -61 -12z`
            },
            {
                name:'tail',
                path:`M5200 3273 c0 -3 7 -13 16 -22 24 -25 82 -119 123 -201 45 -88 79
                -197 93 -295 13 -90 4 -249 -17 -306 -18 -48 -52 -223 -65 -334 -5 -38 -16
                -97 -25 -130 -9 -33 -19 -114 -22 -181 -5 -115 -4 -126 27 -235 37 -132 45
                -149 67 -149 13 0 15 8 10 53 -5 43 -4 49 6 32 7 -11 14 -74 17 -145 l5 -125
                19 27 c10 15 24 51 31 80 7 29 13 45 14 36 1 -10 6 -18 12 -18 9 0 10 28 7 98
                -6 96 -13 122 -79 297 -31 82 -37 231 -14 340 10 50 18 142 20 245 2 102 12
                228 27 330 39 275 28 385 -48 484 -39 51 -97 89 -170 111 -57 17 -54 17 -54 8z`,
                disabled: true
            },
            {
                name:'blade rib',
                path:`M3309 2695 c-3 -2 -85 -16 -182 -30 -223 -31 -380 -34 -438 -6 l-40
                20 7 -192 c8 -242 -6 -411 -40 -481 l-24 -49 71 7 c40 3 231 9 425 12 l352 7
                0 126 c0 126 -43 501 -66 574 -5 16 -53 25 -65 12z`,
                placeholders: {
                    price:{
                        x: 2850,
                        y: -1850
                    }
                },
                price: 'N/A',

            },
            {
                name:'thick flank',
                path:`M5205 2335 c-88 -19 -240 -51 -338 -71 l-178 -37 -47 -71 c-93 -141
                -220 -229 -350 -244 l-63 -7 40 -58 c23 -32 41 -62 41 -67 0 -10 58 -70 69
                -70 4 0 33 16 64 34 135 82 309 123 472 113 86 -6 120 -16 253 -74 8 -3 12 5
                12 24 0 17 29 91 65 166 74 155 110 257 120 340 3 31 5 57 3 56 -2 -1 -75 -16
                -163 -34z`,
                placeholders: {
                    // description:{
                    //     x: 4500,
                    //     y: -1510
                    // }
                }
            },
            {
                name:'flank',
                path:`M4029 2336 c-2 -2 -94 -7 -204 -10 -110 -3 -239 -9 -287 -13 l-88 -6
                0 -213 c0 -117 -5 -248 -10 -291 -12 -93 -38 -222 -49 -243 -5 -9 -12 -30 -15
                -46 -7 -29 -5 -32 25 -38 17 -3 56 -6 86 -6 43 0 69 -7 114 -31 l59 -32 53 28
                c87 46 170 97 208 127 20 15 96 50 168 77 113 43 157 64 215 103 6 4 -4 28
                -26 60 -50 75 -80 135 -95 188 -27 96 -53 226 -53 265 0 74 -7 85 -54 85 -24
                0 -45 -2 -47 -4z`
            },
            {
                name:'brisket',
                path:`M2895 1964 c-699 -31 -1080 -80 -1235 -159 l-51 -26 7 -77 c9 -113
                20 -149 55 -174 17 -13 37 -34 44 -48 10 -19 32 -31 92 -50 70 -22 93 -25 228
                -23 208 2 467 51 606 115 l66 30 186 -11 c103 -6 198 -16 211 -21 14 -5 73
                -16 132 -25 122 -18 114 -22 140 65 33 110 64 290 64 372 l0 38 -242 -2 c-134
                -1 -270 -3 -303 -4z`
            },
            {
                name:'shank',
                path:`M4715 1835 c-5 -2 -48 -15 -95 -30 -81 -26 -230 -99 -230 -113 0 -37
                160 -276 214 -321 24 -20 30 -77 17 -164 -7 -43 -10 -82 -7 -85 4 -3 16 4 29
                15 12 12 50 33 84 47 101 42 179 32 210 -27 9 -17 12 -16 35 12 15 17 29 36
                31 43 4 8 23 -6 56 -40 44 -48 50 -52 56 -33 8 27 83 103 131 134 22 13 64 30
                94 38 30 7 58 17 61 22 13 18 -4 47 -38 68 -76 47 -154 185 -171 302 -7 48
                -11 54 -50 75 -95 53 -138 62 -282 61 -74 0 -139 -2 -145 -4z`
            },
            {
                name:'shank',
                path:`M1755 1420 c11 -12 38 -30 60 -40 35 -15 42 -24 57 -71 26 -81 27
                -86 38 -191 19 -185 56 -224 204 -216 104 6 147 27 189 92 30 47 32 57 35 156
                2 58 8 110 13 116 4 6 13 34 20 62 6 29 23 67 37 84 l27 31 -25 -6 c-81 -20
                -233 -39 -355 -43 -138 -6 -212 5 -300 41 l-20 8 20 -23z`
            },
            {
                name:'x15',
                path: `M5302 1283 c-43 -17 -80 -42 -117 -81 -59 -58 -75 -94 -57 -122 14
                -22 48 -201 58 -299 4 -47 2 -98 -6 -145 l-13 -71 -110 -106 c-103 -99 -121
                -129 -81 -129 8 0 14 -7 14 -16 0 -29 288 -4 328 29 21 17 62 104 62 131 0 16
                -9 32 -25 42 -32 21 -32 52 -1 64 38 14 49 44 41 109 -11 83 -12 105 -20 352
                -5 163 -4 228 4 233 15 10 14 36 -1 36 -7 -1 -41 -13 -76 -27z`,
                disabled: true
            },
            {
                name:'x16',
                path:`M4723 1166 c-39 -19 -74 -39 -77 -45 -4 -6 -15 -11 -24 -11 -12 0
                -23 -18 -37 -62 -32 -101 -133 -296 -172 -331 -82 -74 -323 -312 -323 -319 0
                -5 9 -8 20 -8 12 0 17 -5 14 -14 -7 -17 54 -24 197 -22 105 1 125 10 155 68
                16 31 19 84 4 93 -5 3 -10 15 -10 25 0 16 9 19 52 22 l52 3 116 206 c63 114
                138 235 165 270 83 104 79 94 49 129 -38 42 -87 41 -181 -4z`,
                disabled: true
            },
            {
                name:'x17',
                path:`M2210 904 c-41 -15 -178 -18 -214 -4 l-26 10 0 -115 c0 -130 -17
                -175 -74 -199 -41 -17 -158 -115 -150 -127 3 -5 14 -9 26 -9 13 0 18 -5 15
                -14 -6 -15 9 -19 108 -29 l30 -3 -28 -12 c-34 -14 -33 -45 1 -50 12 -2 22 -10
                22 -18 0 -11 26 -14 145 -14 l145 0 20 32 c21 34 26 87 11 104 -5 5 -11 25
                -15 44 -5 30 -3 37 16 45 12 6 25 21 28 35 7 30 -11 341 -19 339 -3 -1 -22 -7
                -41 -15z`,
                disabled: true
            }
            
        ];

        this.state={
            sheets: [
                {
                    type: 'beef',
                    parts: beefParts
                },
                {
                    type: 'pork',
                    parts:[]
                },
                {
                    type: 'lamb',
                    parts: []
                }
            ],
            hoveredPart: null
        }
        this.handleHover = this.handleHover.bind(this);
    }

    handleHover(cut) {
        this.setState({ hoveredPart: Object.assign({}, cut) });
    }

    render() {
        
        const cutSheet = this.state.sheets.find((cutSheet) => {
            return cutSheet.type === this.props.cutSheetType
        });

        const parts = (cutSheet && cutSheet.parts) || [];

        return (
            <div className="cut-sheet-container" style={{backgroundColor:this.props.theme.backgroundColor}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 400">
                    <g fill="#61DAFB" transform="translate(0.000000,413.000000) scale(0.100000,-0.100000)">
                        {
                            parts.map((part, index)=>{
                                let cutColor = this.props.theme.defaultCutColor;
                                if (part.selected) {
                                    cutColor = this.props.theme.selectedCutColor;
                                }
                                if (part.disabled) {
                                    cutColor = this.props.theme.disabledCutColor;
                                }
                                return (<Cut key={index} 
                                            path={part.path} 
                                            title={part.name} 
                                            fill={cutColor}
                                            textColor={this.props.theme.textColor}
                                            strokeColor={this.props.theme.strokeColor}
                                            disabled={part.disabled}
                                            placeholders={part.placeholders}
                                            price={part.price}
                                            onHover={this.handleHover}/>);
                            })
                        }
                        <text x="3000" y="-3100" 
                                transform="translate(0.000000,413.000000) scale(1,-1)" 
                                fill={this.props.theme.textColor} 
                                fontSize="132" 
                                strokeWidth="0">{this.state.hoveredPart && this.state.hoveredPart.name && this.state.hoveredPart.name.toUpperCase()}</text>
                    </g>
                </svg>
            </div>
        );
    }
}