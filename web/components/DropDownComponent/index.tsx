import React from 'react';
import styled from 'styled-components';
import {DownArrow, UpArrow} from '@components/Arrow';
const {useState} = React;

export const Dropdown = ({linksList, setCategory}) => {
  const [menu, openMenu] = useState(false);
  const [items, setItems] = useState(linksList);
  const [selectedItem, setSelectedItem] = useState(null);
  let arr = [...items];
  let newArr = [];
  arr.filter((item) => (item.id != selectedItem ? newArr.push(item) : null));

  const showMenu = () => {
    openMenu(!menu);
  };

  const closeMenu = () => {
    openMenu(false);
  };

  const handleItemClickClose = (id) => {
    selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
    document.addEventListener('click', closeMenu);
  };

  const handleItemClickOpen = () => {
    document.addEventListener('click', showMenu);
  };

  return (
    <Container>
      <DropdownDefault onClick={() => handleItemClickOpen()}>
        {/* This Shows The Chosen Category */}
        {selectedItem ? (
          <>
            {items.find((item) => item.id == selectedItem).title}
            {setCategory(items.find((item) => item.id == selectedItem).title)}
          </>
        ) : (
          items[0].title
        )}
        <ArrowContainer>{menu ? <UpArrow /> : <DownArrow />}</ArrowContainer>
      </DropdownDefault>
      {menu ? (
        <>
          {newArr.length === items.length
            ? newArr.splice(1).map((item, index) => (
                <DropdownItem
                  key={index}
                  onClick={(e) => handleItemClickClose(e.target.id)}
                  id={item.id}
                >
                  {item.title}
                </DropdownItem>
              ))
            : newArr.map((item, index) => (
                <DropdownItem
                  key={index}
                  onClick={(e) => handleItemClickClose(e.target.id)}
                  id={item.id}
                >
                  {item.title}
                </DropdownItem>
              ))}
        </>
      ) : (
        <>{null}</>
      )}
    </Container>
  );
};

const Container = styled.div`
  border: 2px solid #000000;
`;

const DropdownItem = styled.a`
  display: flex;
  border-top: 1px grey solid;
  padding: 19px 0;
  margin: 0 17px;

  font-family: Proxima Nova;
  font-size: 16px;
  font-weight: 700;
  text-decoration: none;
  cursor: pointer;
`;

const DropdownDefault = styled(DropdownItem)`
  border-top: none;
  position: relative;
`;

const ArrowContainer = styled.span`
  position: absolute;
  right: 0;
`;

// export class Dropdown extends React.Component {
//   static PropTypes = {
//     list: React.PropTypes.array.isRequired,
//   };

//   static defaultProps = {
//     list: [],
//   };

//   constructor(props) {
//     super(props);
//     this.state = {
//       isOpen: false,
//       labelItem: null,
//       typeDropdown: null,
//     };
//   }

//   componentWillMount() {
//     const {label} = this.props.list[0];
//     let firstItem = null;
//     if (typeof label != 'undefined') {
//       this.checkType(false);
//       firstItem = label;
//     } else {
//       this.checkType(true);
//       firstItem = this.props.list[0];
//     }
//     this.setState({
//       labelItem: firstItem,
//     });
//   }
//   checkType = (value) => {
//     this.setState({
//       typeDropdown: value,
//     });
//   };
//   showDropdown = () => {
//     this.setState({isOpen: true});
//     document.addEventListener('click', this.hideDropdown);
//   };
//   hideDropdown = () => {
//     this.setState({isOpen: false});
//     document.removeEventListener('click', this.hideDropdown);
//   };
//   chooseItem = (value) => {
//     if (this.state.labelItem !== value) {
//       this.setState({
//         labelItem: value,
//       });
//     }
//   };

//   renderDataDropDown = (item, index) => {
//     const {value, label} = this.state.typeDropdown
//       ? {value: index, label: item}
//       : item;
//     return (
//       <li key={index} value={value} onClick={() => this.chooseItem(label)}>
//         <a>{label}</a>
//       </li>
//     );
//   };
//   render() {
//     const {list} = this.props;
//     return (
//       <div className={`dropdown ${this.state.isOpen ? 'open' : ''}`}>
//         <button
//           className="dropdown-toggle"
//           type="button"
//           onClick={this.showDropdown}
//         >
//           {this.state.labelItem}
//           <span className="caret"></span>
//         </button>
//         <ul className="dropdown-menu">{list.map(this.renderDataDropDown)}</ul>
//       </div>
//     );
//   }
// }

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <h1>Drop down</h1>
//         <h2>Input: Array text</h2>
//         <Dropdown
//           list={[
//             'January',
//             'February',
//             'March',
//             'April',
//             'May',
//             'June',
//             'July',
//             'August',
//             'September',
//             'October',
//             'November',
//             'December',
//           ]}
//         />
//         <h2>Input: Array object</h2>
//         <Dropdown
//           list={[
//             {value: 1, label: 'January'},
//             {value: 2, label: 'February'},
//             {value: 3, label: 'March'},
//             {value: 4, label: 'April'},
//             {value: 5, label: 'May'},
//             {value: 6, label: 'June'},
//             {value: 7, label: 'July'},
//             {value: 8, label: 'August'},
//             {value: 9, label: 'September'},
//             {value: 10, label: 'October'},
//             {value: 11, label: 'November'},
//             {value: 12, label: 'December'},
//           ]}
//         />
//       </div>
//     );
//   }
// }

// export const Dropdown = ({linksList}) => {
//   const [menu, showMenu] = useState(false);
//   const [items, setItem] = useState(linksList);
//   const [selectedItem, setSelectedItem] = useState(null);

//   const toggleDropdown = (e) => {
//     e.preventDefault();
//     showMenu(!menu);
//   };

//   const handleItemClick = (id) => {
//     selectedItem == id ? setSelectedItem(null) : setSelectedItem(id);
//   };

//   return (
//     <Container>
//       <DropdownDefault onClick={toggleDropdown}>
//         {selectedItem && items.find((item) => item.id == selectedItem).title}
//         <ArrowContainer>{menu ? <UpArrow /> : <DownArrow />}</ArrowContainer>
//       </DropdownDefault>
//       {menu ? (
//         <>
//           {items.map((item) => (
//             <DropdownItem
//               onClick={(e) => handleItemClick(e.target.id)}
//               id={item.id}
//             >
//               {item.title}
//             </DropdownItem>
//           ))}
//         </>
//       ) : (
//         <>{null}</>
//       )}
//     </Container>
//   );
// };

// import {DownArrow, UpArrow} from '@components/Arrow';

// export class Dropdown extends Component {
//   constructor(props) {
//     super(props);

//     this.state = {
//       showMenu: false,
//       selectedItem: null,
//     };

//     this.showMenu = this.showMenu.bind(this);
//     this.selectedItem = this.selectedItem.bind(this);
//   }

//   showMenu(e) {
//     e.preventDefault();
//     this.setState({
//       showMenu: !this.state.showMenu,
//     });
//   }

//   selectedItem(e) {
//     this.setState({
//       selectedItem: this.props.title,
//     });
//   }

//   render() {
//     return (
//       <Container>
//         <DropdownDefault onClick={this.showMenu}>
//           {/* this will show the first one on the list */}
//           <TypographyLink>{this.props.linksList[0].title}</TypographyLink>
//           <ArrowContainer>
//             {this.state.showMenu ? <UpArrow /> : <DownArrow />}
//           </ArrowContainer>
//         </DropdownDefault>
//         {this.state.showMenu ? (
//           <>
//             {this.props.linksList.slice(1).map((link, index) => (
//               <DropdownItem key={index}>
//                 <TypographyLink>{link.title}</TypographyLink>
//               </DropdownItem>
//             ))}
//           </>
//         ) : null}
//       </Container>
//     );
//   }
// }

// const Container = styled.div`
//   border: 2px solid #000000;
// `;

// const DropdownItem = styled.div`
//   display: flex;
//   border-top: 1px grey solid;
//   padding: 19px 0;
//   margin: 0 17px;

//   transition: all 0.2s ease-in-out;
// `;

// const DropdownDefault = styled(DropdownItem)`
//   border-top: none;
//   position: relative;
//   cursor: pointer;
// `;

// const TypographyLink = styled.a`
//   font-family: Proxima Nova;
//   font-size: 16px;
//   font-weight: 700;
//   margin: 0;
//   text-decoration: none;
// `;

// const ArrowContainer = styled.span`
//   position: absolute;
//   right: 0;
// `;
