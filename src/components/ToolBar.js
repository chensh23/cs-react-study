/**
 * @Description:
 * @Author: CHEHSHUANG
 * @Date: 2018/9/27
 */

import React, {Component} from "react"
import {Button,Input} from "antd";

class ToolBar extends Component{

    getSearchItems = (searchBtnCfg)=>{
        const {quickSearchCfg,advanceSearchCfg} = searchBtnCfg;
        let items = [];
        if(quickSearchCfg){
            quickSearchCfg.className = quickSearchCfg.className ? 'tbar-search'+" "+ quickSearchCfg.className : 'tbar-search';
            items.push(<Input.Search key={'0'} {...quickSearchCfg}/>) ;
        }
        if(advanceSearchCfg){
            advanceSearchCfg.style = {marginLeft:'6px',...advanceSearchCfg.style};
            items.push(<Button key={'1'} {...advanceSearchCfg}>{advanceSearchCfg.title}</Button>);
        }
        return items;
    }
    render(){
        const {btnsCfg,searchBtnCfg} = this.props;
        return (
            <div className={'tbar-box'}>
                <div className={'tbar-btn-box'}>
                    {
                        btnsCfg ? btnsCfg.map(
                            (item,i)=>{
                                item.propsCfg.className = item.propsCfg.className ? "tbar-btn" +" "+item.propsCfg.className : "tbar-btn";
                                return (<Button key={i} {...item.propsCfg}>{item.title}</Button>)
                            }
                        ): ""
                    }
                </div>
                <div className={'tbar-search-box'}>
                    {
                        searchBtnCfg ? this.getSearchItems(searchBtnCfg) : ""
                    }
                </div>
            </div>
        );
    }
}
export default ToolBar;
