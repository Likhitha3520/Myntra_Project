import React, { Component } from "react";
import {Link} from 'react-router-dom';
import Data from './data.json';
import homeData from './homedata.json';
import './myntra.css'
//import Profile from "./Profile";
//import productData from './products.json';
import productData from './products.json';


export default class Home extends Component {
    constructor(props) {
        super(props)
        this.search = React.createRef();
        this.men = React.createRef();
        this.women = React.createRef();
        //this.profile = React.createRef();
        this.state = {
            child:false,
            msg: false,
            all: true,
            display: false,
            show: false,
            contact: false,
            select: "",
            wishlistMsg: false,
            showproduct: false,
            cartItemsmsg: false,
            orderMsg:false,
            wishListLength:0,
            cartItemsLength:0,
            array :[],
        items : [],
        cartItems : [],
        wishListItems :[],
        ordersData:[]
        }
        this.contactUsMsg=''
        /*this.state.array = [];
        this.items = [];
        this.state.cartItems = [];
        this.state.wishListItems = []*/
    }
    orders=(i)=>{
        this.setState({ordersData:i})
        console.log(this.state.ordersData)
    }
    removecartItems=(i)=>{
        let arr=this.state.cartItems.splice(i,1)
        console.log(arr)
        //this.setState({cartItems:this.state.cartItems})
        this.setState({ cartItemsLength:this.state.cartItems.length,contact: false, all: false, show: false, msg: false, cartItemsmsg: true, showproduct: false, display: false,wishlistMsg:false })
    }
    removewishListItems=(i)=>{
        console.log(i)
        let arr=this.state.wishListItems.splice(i,1)
        console.log(arr)
        
       this.setState({wishListItems:this.state.wishListItems})
       console.log(this.state.wishListItems)
       this.setState({ wishListLength:this.state.wishListItems.length,contact: false, all: false, show: false, msg: false, cartItemsmsg: false, showproduct: false, display: false,wishlistMsg:true })

    }
    addCart = (i) => {
        this.state.cartItems.push(i)
        
        console.log(this.state.cartItems)
        this.setState({ cartItemsLength:this.state.cartItems.length,contact: false, all: false, show: false, msg: false, cartItemsmsg: false, showproduct: true, display: false, wishlistMsg: false })

    }
    /*cartItemsmsgCart=(data)=>{
        console.log(data)
       this.items.push(data)
       
       this.setState({contact:false,all:false,show:false,all:false,msg:false,cartItemsmsg:false})
    }*/
    addwishList = (i) => {

        this.state.wishListItems.push(i)
        //wishListLength=this.state.wishListItems.length
        console.log(this.state.wishListItems)
        this.setState({ wishListLength:this.state.wishListItems.length,contact: false, all: false, show: false, msg: false, cartItemsmsg: false, showproduct: true, display: false,wishlistMsg:false })

    }
    wishList = () => {
        
        this.setState({ contact: false, all: false, show: false, msg: false, cartItemsmsg: false, showproduct: false, display: false, wishlistMsg: true })
    }
    bag = () => {
        /*this.show=false
        this.showproduct=false
        this.all=false
        this.msg=false
        this.contact=false
        console.log(this.items)
        this.state.cartItemsmsg=true*/
        this.setState({ show: false, showproduct: false, all: false, msg: false, contact: false, cartItemsmsg: true, display: false ,wishlistMsg:false})
    }
    profilePage = () => {
       /* console.log(this.profile.current.value)
        //this.select=''
        if (this.profile.current.value === 'contactUs') {
            /*this.contact=true
            this.all=false
            this.setState({ contact: true, all: false, show: false, showproduct: false, display: false, msg: false, cartItemsmsg: false })

        }
        if (this.profile.current.value === 'logout') {
            this.props.history.push({
                pathname: '/',

            }
            )

        }*/
        this.setState({contact:true})


    }


    dropDown = (type) => {
        if (type === "search") {

            if (  this.search.current.value.length > 3) {
                /*this.display=true
                this.show=true*/
                this.setState({ display: true, show: true, showproduct: false,cartItemsmsg:false })
            }
            else {
                /*this.all=true
                this.display=false*/
                this.setState({ all: true, display: false })
                if (this.state.array.length > 0) {
                    for (let i = 0; i < this.state.array.length; i++) {
                        delete this.state.array[i];
                    }
                }
            }

        }

        if (type === "men") {
            if (this.men.current.value === 'all') {
                /*this.all=true
                this.msg=false*/
                this.setState({ all: true, msg: false, showproduct: false })
            }
            else {
                if (this.state.array.length > 0) {
                    for (let i = 0; i < this.state.array.length; i++) {
                        delete this.state.array[i];
                    }
                }
                for (let i = 0; i < productData.length; i++) {
                    if (this.men.current.value === productData[i].name) {
                        /*this.msg=true
                        this.all=false*/

                        for (let j = 0; j < productData[i].products.length; j++) {
                            this.state.array.push(productData[i].products[j])
                            console.log(this.state.array)

                        }
                        this.setState({ msg: true, all: false, showproduct: false, cartItemsmsg: false, wishlistMsg: false, cartItemsmsg: false })
                    }
                }
            }
        }
        if (type === "women") {
            if (this.women.current.value === 'all') {
                /* this.all=true
                 this.msg=false*/
                this.setState({ msg: false, all: true, showproduct: false, cartItemsmsg: false, wishlistMsg: false, cartItemsmsg: false })
            }
            else {
                if (this.state.array.length > 0) {
                    for (let i = 0; i < this.state.array.length; i++) {
                        delete this.state.array[i];
                    }
                }
                for (let i = 0; i < productData.length; i++) {
                    if (this.women.current.value === productData[i].name) {
                        /*this.msg=true
                        this.all=false*/

                        for (let j = 0; j < productData[i].products.length; j++) {
                            this.state.array.push(productData[i].products[j])
                            console.log(this.state.array)

                        }
                        this.setState({ msg: true, all: false, showproduct: false, cartItemsmsg: false, wishlistMsg: false, cartItemsmsg: false })
                    }
                }

            }
        }
        if (type !== "men" && type !== "women") {

            if (this.state.array.length > 0) {
                for (let i = 0; i < this.state.array.length; i++) {
                    delete this.state.array[i];
                }
            }
            for (let i = 0; i < productData.length; i++) {
                console.log(type)
                if (type === productData[i].name) {
                    /*this.show=false
           
                    this.msg=true
                    this.all=false
                    this.display=true*/
                    this.setState({ msg: true, all: false, display: true, show: false, showproduct: false })
                    for (let j = 0; j < productData[i].products.length; j++) {
                        this.state.array.push(productData[i].products[j])
                        console.log(this.state.array)

                    }
                }

            }
        }
        this.setState({})
    }
    home = () => {
        /*this.all=true;
        this.msg=false;
        this.display=false;*/
        this.setState({ all: true, msg: false, display: false, showproduct: false,wishlistMsg:false,cartItemsmsg:false,show:false,contact:false })
    }
    productDisplay = (image) => {

        if (this.state.array.length > 0) {
            for (let i = 0; i < this.state.array.length; i++) {
                delete this.state.array[i];
            }
        }



        this.state.array.push(image)
        console.log(this.state.array)
        this.setState({ show: false, showproduct: true, msg: false, all: false, display: false })



        
    }
    profile=(type)=>{
        if(type==='contactUs'){
            this.contactUsMsg='contact us'
            this.setState({contact:false,all:false})
        }
        if(type==='logout'){
            this.props.history.push({
                pathname:'/'
            })
        }
    if(type==='orders')
    {
      this.setState({orderMsg:true,contact:false,all:false,cartItemsmsg:false})
    }
        
    }
    render() {
        return (
            <div>
                <div className='container'>
                    <button id='logo' onClick={this.home}><img style={{ height: 40, width: 50 }} src="https://images.news18.com/ibnlive/uploads/2021/01/1611996262_ynt.jpeg"></img></button>
                    <select id='selectMen' ref={this.men} onClick={() => this.dropDown("men")}>
                        <option value="all">MEN</option>
                        <option value="Tshirt">T-shirts</option>
                        <option value="Casualshirts">Casual shirts</option>
                        <option value="Formalshirts">Formal shirts</option>

                    </select>
                    <select id='selectWomen' ref={this.women} onClick={() => this.dropDown("women")}>
                        <option value="all">WOMEN</option>
                        <option value="Kurtas">Kurtas</option>
                        <option value="leggins">Leggins</option>
                        <option value="sarees">Sarees</option>

                    </select>
                    <input id='input' ref={this.search} placeholder='search for products' onChange={() => this.dropDown("search")} ></input>
                    <button id='profile' onClick={this.profilePage}><img src='https://png.pngtree.com/png-vector/20190223/ourlarge/pngtree-profile-line-black-icon-png-image_691051.jpg' style={{height:30,width:30}}></img><br></br>Profile</button><br></br>
                    
                   
                    <Link to="#" className="notification1" onClick={this.wishList}>
  <img style={{height:35,width:35}} src='data:image/png;base64,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'></img><br></br>wishlist
  <span className="badge1">{this.state.wishListLength}</span>
</Link>
<Link to="#" className="notification" onClick={this.bag}>
  <span><img style={{height:35,width:35}} src='data:image/png;base64,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'></img><br></br>Bag</span>
  <span className="badge">{this.state.cartItemsLength}</span>

</Link></div>
{(this.state.contact)?<div>
                        <br></br>
                    <button onClick={()=>this.profile('contactUs')}>contact us</button>
                    <button onClick={()=>this.profile('orders')}>orders</button>
                    <button onClick={()=>this.profile('logout')}>log out</button>
                </div>:null
                }
                {this.state.display ? (<div>



                    {productData.filter((val) => {
                        if (val.name.toLowerCase().includes(this.search.current.value.toLowerCase())) {
                            console.log(val)
                            return val

                        }
                    }).map((i) => {
                        console.log(i)
                        return (
                            <div id='link'>
                                {this.state.show ? <a href="#" onClick={() => this.dropDown(i.name)}>{i.name}</a> : null}

                            </div>
                        )
                    })}
                </div>) : null}
                {this.state.msg === true ? (<div className='data'>
                    {console.log(this.state.array)}
                    {this.state.array.map((i) => {

                        return (
                            <div>
                                <button onClick={() => this.productDisplay(i)}><img style={{ width: 200, height: 200 }} src={i.imageurl} ></img></button>
                                <h2>{i.brand}</h2>
                                <h3>{i.price}</h3>
                            </div>
                        )
                    })}
                </div>) : null}
                {this.state.all ? (<div >   <div className='card'>  {Data.map((i) => {
                    return (
                        <div >
                            <img src={i.image} style={{ width: 200, height: 200 }}></img>
                            <p>{i.message}</p><br></br>

                        </div>
                    )
                })}</div>
                    <h1 id='explore'>Explore Top Brands</h1><div className='topBrand'>
                        {homeData.map((i) => {
                            return (
                                <div>
                                    <img src={i.imageurl} style={{ width: 200, height: 200 }}></img>
                                    <h1>{i.brandname}</h1>
                                    <p>{i.messages}</p><br></br>

                                </div>
                            )
                        })}</div></div>) : null}
                {this.state.cartItemsmsg ? <div>{this.state.cartItems.map((i,index) => {
                    //console.log(this.items.imageurl)
                    return (<div>
                        <h1></h1>
                        <img src={i.imageurl}></img>
                        <h2>{i.brand}</h2>
                        <h2>{i.price}</h2>
                        <button onClick={()=>this.removecartItems(index)}>Remove from cart</button>
                        
                    </div>)
                    
                })}{this.state.cartItems.length>1?<button onClick={()=>this.orders(this.state.cartItems)} >SUBMIT</button>:null}</div> : null}
                
                {this.state.showproduct ? <div> {this.state.array.map((i) => {
                    return (
                        <div id='display'>
                            <img style={{ height: 200, width: 200 }} src={i.imageurl}></img>
                            <h2>{i.brand}</h2>
                            <h3>{i.price}</h3>
                            <button id='wishList' onClick={() => this.addwishList(i)}>ADD TO WISHLIST</button>
                            <button id='cart' onClick={() => this.addCart(i)}>ADD TO CART</button>
                        </div>
                    )
                })}</div> : <h1>Bag is Empty</h1>}
                {this.state.wishlistMsg ? <div>{this.state.wishListItems.map((i,index) => {
                    return (
                        <div>
                            <img src={i.imageurl}></img>
                            <h2>{i.brand}</h2>
                            <h2>{i.price}</h2>
                            <button onClick={()=>this.removewishListItems(index)}>Remove from wishlist</button>
                        </div>
                    )
                })}</div> : <h1>Wishlist is empty</h1>}
                {this.state.orderMsg?<div>
                    {console.log(this.state.ordersData[0])}
                    {this.state.ordersData.map((i)=>{
                        return(<div>
                            <img src={i.imageurl}></img>
                            <h2>{i.brand}</h2>
                            <h2>{i.price}</h2>
                        </div>

                        )
                    })}
                </div>:null}
               
                {this.contactUsMsg}


            </div>
        )
    }
}