import React, { Component } from "react";

import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import { connect } from "react-redux";
import { getItems, deleteItem, addItem } from "../actions/itemActions";

import propTypes from "prop-types";

class TodoList extends Component {
  componentDidMount() {
    this.props.getItems();
  }

  onDeleteClick = (_id) => {
    this.props.deleteItem(_id);
    //console.log(id, "from ondeleteclick");
  };
  render() {
    const { items } = this.props.item;
    return (
      <Container>
        <ListGroup>
          <TransitionGroup className="todo-list">
            {items.map(({ _id, name }) => (
              <CSSTransition key={_id} timeout={500} classNames="fade">
                <ListGroupItem>
                  <Button
                    className="remove-btn"
                    color="danger"
                    size="sm"
                    onClick={() => {
                      this.onDeleteClick(_id);
                      //console.log(id, "from  delete button");
                    }}
                  >
                    &times;
                  </Button>
                  {name}
                </ListGroupItem>
              </CSSTransition>
            ))}
          </TransitionGroup>
        </ListGroup>
      </Container>
    );
  }
}
TodoList.propTypes = {
  getItems: propTypes.func.isRequired,
  item: propTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  item: state.item,
});

export default connect(mapStateToProps, { getItems, deleteItem, addItem })(
  TodoList
);
