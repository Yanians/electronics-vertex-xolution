import React  from 'react';
// import { connect } from 'react-redux';
// import { PropTypes } from 'prop-types';
import { Links, View } from '../components';

import { Devices } from '../components';
// import Routed from '../user/client/routed';
import Swal from 'sweetalert2';
import { CardContent } from '../wrapper';

class DeviceType extends React.Component{
  
  render(){ 

    return<Links><Devices details={this.props.details} addClass={this.props.add} removeClass={this.props.remove} showClass={this.props.classChange} index={this.props.index} data={this.props.dataArray} /></Links>
}}

export class Minimal extends React.Component{
     constructor(props){
     	  super(props);
          this.add = this.add.bind(this);
          this.remove = this.remove.bind(this);
          this.refresh = this.refresh.bind(this);
          this.readData = this.readData.bind(this);
          this.state = {
              classChange: ["display-none"],
                  indexes: 1,
                  onHover: ["btn-edited"],
                  allItems:[],
                  refresh:"",
                  count:0,
                  itemDetails:[]
                  } // One way data flow the source of truth
     }

      add(e){
           const action = e.target.value;
           const i = parseInt(action)
           const gets = async () => {
             const details = await this.props.defaultDb.get(i); 
             this.setState({itemDetails:details});
           }
           gets();
           
          this.setState({indexes:i});
          const add = this.state.classChange.concat(["display-block"])
          this.setState({classChange:add});
         }

         refresh(){
          this.setState({itemDetails:this.state.refresh});
         }

         remove(){
          const remove = this.state.classChange.slice()
                remove.splice(1,1)
                  this.setState({classChange:remove})
                  this.refresh()
         }


       readData = async()=>{
              const { defaultDb } = this.props;
               const req = defaultDb.map((i)=>{
                     const data = {
                        title:i.title,
                        price:i.price,
                        desc:i.desc,
                        image:i.image,
                     };
                     return data;
              });
              
         //      const insertToDb = await defaultDb;
         //      const counting = await defaultDb;
         //      this.setState({count:defaultDb});
         //      const result = await defaultDb.toArray();
         //      const isIdExist = result.map((i)=>i.id);
         //      const req = result.map(({id,title,price,desc,image})=>{return{id,title,price,desc,image}});

         //      let timerInterval;

         //      jsonData.map((item)=>{
         //                const data = {
         //                  title:item.title,
         //                  price:item.price,
         //                  desc:item.desc,
         //                  image:item.image
         //                }
         //            let dataArray = (isIdExist !== "" && isIdExist <= 0) ? insertToDb.add(data) : ( Swal.fire({
         //                      timer:this.state.count,
         //                      width:90,
         //                      timerProgressBar: false,
         //                      showClass: {
							  //   popup: 'swal2-noanimation',
							  //   backdrop: 'swal2-noanimation'
							  // },
							  // hideClass: {
							  //   popup: '',
							  //   backdrop: ''
							  // },
         //                      didOpen: () => {
         //                        Swal.showLoading();
         //                      },
         //                      willClose: () => {
         //                        clearInterval(timerInterval)
         //                      }
         //                    }).then((result) => {
         //                      if (result.dismiss === Swal.DismissReason.timer) {
         //                             // console.clear();
         //                            console.log('field was cleared');
         //                      }
         //                    })
         //                   )
         //                  return dataArray;
         //            },[])
                return req;
              }
           
   componentDidMount(){

      this.readData().then((data)=>{
         this.setState({allItems:data})
      });
   }

    render(){
      const i = this.state.itemDetails;
      const index = this.state.indexes;
      const wait = <View change={this.state.classChange} image={i.image} price={i.price} desc={i.desc} title={i.title} onClick={this.remove} /> 
      return<DeviceType details={wait} index={index} add={this.add} remove={this.remove} classChange={this.state.classChange} dataArray={this.state.allItems} />
    }
}

export class Source extends React.Component{

  constructor(props){
    super(props)
    this.read = this.read.bind(this);
    this.state = {total:0,img:[],title:[],desc:[],click:false}
  }

  read = async() => {
    const { data } = this.props;
      // const i = await this.props.data.count(); //last item in the store
      const count = data.map((item)=>item.id)
      const i = count.length      
      // await this.props.data.get(i,(key)=>{
            data.map((item)=>{
             if(i === item.id){
              const data = item;
              const { image, desc, } = data;
               this.setState({img:image});
               this.setState({desc:desc});    
               this.setState({total:i})
             }
             return data
      });
  };

  componentDidMount(){
    this.read().then(()=>{
        let timerInterval
             Swal.fire({
                        timer:300,
                        width:90,
                        timerProgressBar: false,
                        showClass: {
                          popup: 'swal2-noanimation',
                          backdrop: 'swal2-noanimation'
                        },
                        hideClass: {
                          popup: 'showClass',
                          backdrop: 'hideClass'
                        },
                        didOpen: () => {
                          Swal.showLoading();
                        },
                        willClose: () => {
                          clearInterval(timerInterval)
                        }
                      }).then((result) => {
                        if (result.dismiss === Swal.DismissReason.timer) {
                        }
                      })
    })
  }

  render(){
    const numbers = this.state.total;
    const img = this.state.img;
    const desc = this.state.desc;
    return(
      <CardContent title={numbers+" Items "} link={this.props.link} onClick={this.props.click} text={desc} src={img} />
      )
  }
}