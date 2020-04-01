import React, {Component} from "react";
// import Main from "./main";
export default class Result extends Component{
  
  // const {tasks} = props
  state = {
    loading: true,
    translated: null
  };

  dummyData = [
    "an country demon message it. Bachelor domestic extended doubtful as concerns at. Morning prudent removal an letters by. On could my in order never it. Or excited certain sixteen it to parties colonel. Depending conveying direction has led immediate. Law gate her well bed life feet seen rent. On nature or no except it sussex",
    "      Delightful unreserved impossible few estimating men favourable ties. She propriety immediate was improving. He or entrance human likewise moderate. Much nor game son say feel. Fat make met can must form into gate. Me we offending prevailed discovery "
  ];
  language = [
    "ar",
    "en",
    "zh",
    "es",
    "hi",
    "ru",
    "ja",
    "tr",
    "ga",
    "it",
    "de",
    "el",
    "fr"
  ];
  //  options = this.language.map((lang)=>{

  //   return(
  //     <div key={this.language.key}>
  //     <select>
  //       <option>
  //         {this.language}
  //       </option>
  //     </select>
  //     </div>
  //   )
  // })
  async componentDidMount(){
    const url1 = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200401T052304Z.29988c43302dc2e8.cfa173c0be8d625af83e07a8a68bff6274912094&text="+${this.dummyData[0]}+ ${this.dummyData[1]} "&lang=${this.language[1]}-${this.language[6]}`;

    const response = await fetch(url1);
    const data =  await response.json();
    this.setState({ translated: data.text, loading: false });
    

  }
  async componentDidUpdate(){
    const url = `https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20200401T052304Z.29988c43302dc2e8.cfa173c0be8d625af83e07a8a68bff6274912094&text="+${this.props.inputText}+"&lang=${this.language[1]}-${this.language[0]}`
    const response = await fetch(url);
    const data =  await response.json();
    this.setState({ translated: data.text, loading: false });

  }
  
  render(){

    if (this.state.loading) {
      return <div>loading...</div>;
    }
    if (!this.state.translated) return <div>Ooops! There is no translated text. <br/> Please try again.</div>;
    return (
      <React.Fragment>
        {this.state.translated[0]}
        {/* {this.options} */}
        </React.Fragment>
    );
    
  }
   
}

// {
/* <img src={this.state.picture.large} /> */
// }


// Promise.all(this.dummyData).then((res) => res.json()).then(res=>{
//   this.setState({ translated: res.text, loading: false });
//   console.log(res.text);

// })