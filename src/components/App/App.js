import React, { Component } from 'react';

import Title from '../Title';
import ToDoList from '../ToDoList';
import SearchPanel from '../SearchPanel';
import ItemStatusFilter from '../ItemStatusFilter';

export default class App extends Component {

  state = {
    dataArr: [
      {title: 'Drink coffe', important : false, id: 1, done: false},
      {title: 'Learn React', important : false, id: 2, done: false},
      {title: 'Build awesome App of millenium ages forEver', important : false, id: 3, done: false}
    ],
  };

  deleteItem = (id) => {
    this.setState( ({ dataArr }) => {
      const idx = dataArr.findIndex( (el) => el.id === id );

      let resultArr = [
        ...dataArr.slice(0, idx), 
        ...dataArr.slice(idx + 1)
      ];

      return {
        dataArr: resultArr
      }
    })
  };

  addItem = (event) => {
    event.preventDefault();
    
    this.setState( ({ dataArr }) => {
      let itemTitle = document.querySelector('#item_title').value; 
      // console.log(dataArr.length);

      let newItem = {
        title: itemTitle,
        important: false,
        id: dataArr.length + 1
      };

      let newAddedArr = [
        ...dataArr,
        newItem
      ];

      return {
        dataArr: newAddedArr
      }
    }); 
  };

  onToggleDone = (id) => {
    this.setState( ({ dataArr }) => {
      const index = dataArr.findIndex((el) => el.id === id);

      let resultArr = [...dataArr];

      resultArr[index].done = !dataArr[index].done;

      let doneEls = document.querySelectorAll(".to-do-list-item-label");

      // console.log('resultArr>>', resultArr);
      resultArr[index].done ? doneEls[index].style.textDecoration = "line-through" : doneEls[index].style.textDecoration = "unset";

      return {
        dataArr: resultArr
      }
    });
  };

  onToggleImportant = (id) => {
    this.setState( ({ dataArr }) => {
      const index = dataArr.findIndex( (el) => el.id === id);

      let resultArr = [...dataArr];

      resultArr[index].important = !dataArr[index].important;

      let impEls = document.querySelectorAll(".to-do-list-item-label");

      resultArr[index].important ? impEls[index].classList.add("text-primary", "fw-bold") : impEls[index].classList.remove("text-primary", "fw-bold");
      resultArr[index].important ? impEls[index].style.fontWeight = "bold" : impEls[index].style.fontWeight = "normal";

      console.log('index>>>', index);
      
      return {
        dataArr: resultArr
      }

    });

  }

  render() {
    return (
      <div className="container">
          <Title toDo={ 1 } done={ 3 }/>
          <div className="search_filter_wrap d-flex align-items-center justify-content-between my-3">
            <SearchPanel />
            <ItemStatusFilter />
          </div>
          <ToDoList 
            compData={ this.state.dataArr } 
            onDeleted={ this.deleteItem }
            addItem={ this.addItem }
            onToggleImportant={ this.onToggleImportant }
            onToggleDone={ this.onToggleDone }
          />
      </div>
    ); 
  }
}

/* function Automobile(mark, type) {
  this.mark = mark;
  this.type = type;
}

Automobile.prototype.showType = function() {
  console.log(`${this.mark} type is ${this.type}`);
}

const bmw = new Automobile("BMW", "sedan");
bmw.showType(); */

/* class Automobile {
  constructor(mark, type) {
    this.mark = mark;
    this.type = type;
  }

  selfPresentation() {
    console.log(`${this.mark} is ${this.type}`);
  }
}

class Truck extends Automobile {
  constructor(mark, type, haveTrailer) {
    super(mark, type);
    // super.selfPresentation();
    this.haveTrailer = haveTrailer;
  }

  selfPresentation() {
    const isHaveTrailer = this.haveTrailer ? ` and have trailer` : ``; 
    console.log(`${this.mark} is ${this.type}${isHaveTrailer}`);
  }
}

const daf = new Truck('daf', 'truck', true);
daf.selfPresentation(); */
