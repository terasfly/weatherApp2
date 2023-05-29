                        * {
                            margin: 0;
                            padding: 0;
                            box-sizing: border-box;
                            list-style: none;
                            text-decoration: none;
                            text-align: center;
                            font-family: 'Shantell Sans', cursive;
                            color: #fff;
                        }
                        
                        body {
                            background: url('images/64x64/day/sam-schooler-E9aetBe2w40-unsplash.jpg');
                        }
                        
                        .container {
                            height: 100vh;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            /* border: 1px solid red; */
                            /* margin: 35px auto; */
                        }
                        
                        #change__backgr {
                            background-position: center;
                            background-size: cover;
                            background-repeat: no-repeat;
                            /* height: 100vh; */
                        }
                        
                        .city {
                            margin: 30px 0;
                            text-transform: uppercase;
                            letter-spacing: 1.5px;
                            padding: 10px
                        }
                        
                        .weather__app {
                            min-height: 700px;
                            width: 394px;
                            /* border: 1px solid black; */
                            padding: 7px;
                            /* background: rgb(77, 93, 243); */
                            background-color: #3b5cec;
                            background-image: linear-gradient(0deg, #202c60 0%, #40acbe 100%);
                            background-repeat: no-repeat;
                            border-radius: 5px;
                            box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
                            padding-bottom: 40px;
                            /* margin-top: 50px; */
                        }
                        
                        .weahter__condition-now {
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            flex-direction: column;
                            padding-bottom: 20px;
                        }
                        
                        .weather__forecast-now {
                            display: flex;
                            gap: 20px;
                        }
                        
                        .temp__now-degrs {
                            display: block;
                            margin-top: 10px;
                            font-size: 45px;
                            color: #ffff;
                            position: relative;
                        }
                        
                        .temp__now-degrs::after {
                            content: '°';
                            position: absolute;
                            bottom: 13%;
                            left: 126%;
                            font-size: 29px;
                            transform: translate(-50%, -50%);
                        }
                        
                        .temp__now-degrs2::after {
                            content: '°';
                            position: absolute;
                            bottom: 13%;
                            left: 126%;
                            font-size: 29px;
                            transform: translate(-50%, -50%);
                        }
                        
                        .weather__condition-image {
                            margin-left: 10px;
                        }
                        /* Style the container element */
                        
                        .search__city {
                            position: relative;
                            display: inline-block;
                            margin: 20px;
                        }
                        /* Style the search input */
                        
                        .search__input {
                            padding: 10px 20px;
                            border: none;
                            border-radius: 30px;
                            font-size: 17px;
                            width: 286px;
                            background-color: #f8f8f8;
                            transition: all 0.3s cubic-bezier(0.42, 0, 0.51, 0.57);
                            color: #5063b6
                        }
                        /* Style the search icon */
                        
                        .search__input::placeholder {
                            color: #aaa;
                            font-weight: bold;
                        }
                        /* Style the input on focus */
                        
                        .search__input:focus {
                            outline: none;
                            background-color: #fffafa;
                            box-shadow: 0px 0px 10px 0px rgba(0, 123, 255, 0.2);
                        }
                        /* Style the search icon on hover */
                        
                        .search__input:hover {
                            background-color: #f0f0f0;
                        }
                        
                        .search_x::-webkit-search-cancel-button {
                            -webkit-appearance: none;
                            height: 0;
                            width: 0;
                            padding: 0;
                            margin: 0;
                            border: none;
                        }
                        
                        .btn {
                            width: 50px;
                            margin-top: 3px;
                            font-size: 25px;
                            padding: 5px;
                            background-color: rgb(243, 239, 9);
                            outline: 0;
                            border-radius: 28% 72% 62% 38% / 30% 31% 69% 70%;
                            border: none;
                            color: #ffff;
                            cursor: pointer;
                            margin-top: 20px;
                            color: #fff;
                            font-weight: 700;
                        }
                        
                        .date {
                            display: flex;
                            flex-direction: column;
                            align-items: center;
                            justify-content: center;
                            gap: 20px;
                            /* border: 1px solid red; */
                        }
                        
                        .today__date {
                            color: #fff;
                            font-size: 24px;
                        }
                        
                        .today__time {
                            font-size: 21px;
                            color: #efff00;
                        }
                        
                        #time__date::before {
                            /* display: block; */
                            content: url('images/211606_clock_icon.svg');
                            padding: 5px;
                        }
                        
                        .slider {
                            display: flex;
                            width: 100%;
                            overflow-x: auto;
                            margin: 30px auto;
                        }
                        
                        .slider2 {
                            display: flex;
                            width: 100%;
                            overflow-x: auto;
                            margin: 30px auto;
                            padding-bottom: 20px;
                            margin-bottom: 50px;
                        }
                        
                        #tomorow--date {
                            padding-top: 20px;
                        }
                        
                        .weather__condition {
                            /* display: flex; */
                            /* flex-direction: column; */
                            gap: 16px;
                            flex: 0 0 auto;
                            width: 53px;
                            margin-right: 22px;
                            margin-bottom: 20px;
                            margin-top: 20px;
                            font-size: 22px;
                            align-items: center;
                            justify-content: center;
                            margin-left: 13px;
                        }
                        
                        .temp__degrs {
                            padding-top: 14px;
                            position: relative;
                        }
                        
                        .temp__degrs::after {
                            content: '°';
                            position: absolute;
                            bottom: 13%;
                            left: 126%;
                            font-size: 15px;
                            transform: translate(-50%, -50%);
                        }
                        
                        .temp__degrs3 {
                            padding-top: 14px;
                            position: relative;
                        }
                        
                        .temp__degrs3::after {
                            content: '°';
                            position: absolute;
                            bottom: 13%;
                            left: 126%;
                            font-size: 15px;
                            transform: translate(-50%, -50%);
                        }
                        
                        .sliders {
                            margin-bottom: 50px;
                        }
                        
                        .degrs {
                            position: absolute;
                            top: 0;
                            left: 0;
                            font-size: 29px;
                            /* transform: translate(-50%, -50%); */
                        }
                        
                        .temp__degrs2 {
                            padding-top: 14px;
                            position: relative;
                        }
                        
                        .temp__degrs2 ::after {
                            content: '°';
                            position: absolute;
                            bottom: 13%;
                            left: 126%;
                            font-size: 15px;
                            transform: translate(-50%, -50%);
                        }
