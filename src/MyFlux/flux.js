import React from "react";

const createStore = (rootReducer) => {
    let state;
    let listeners = [];

    const getState = () => state;

    const dispatch = (action) => {
        state = rootReducer(state, action);
        listeners.forEach((listener) => listener(state));
    };

    const subscribe = (listener) => {
        listeners.push(listener);
    };

    dispatch({});

    return { getState, dispatch, subscribe };
};

const Context = React.createContext("flux");

const Provider = ({ store, children }) => (
    <Context.Provider value={store}>{children}</Context.Provider>
);

const connect = (mapStateToProps, mapDispatchToProps) => {
    return (WrappedComponent) => {
        class Connect extends React.Component {
            constructor(props) {
                super(props);
                this.state = props.store.getState();
            }

            componentDidMount() {
                this.props.store.subscribe((state) => {
                    this.setState(state);
                });
            }

            render() {
                const {store} = this.props;
                return (
                    <WrappedComponent
                        {...this.props}
                        {...mapStateToProps(store.getState())}
                        {...mapDispatchToProps(store.dispatch)}
                    />
                );
            }
        }

        return props => (
            <Context.Consumer>
                {(store) => <Connect {...props} store={store}/>}
            </Context.Consumer>
        );
    };
};

const combineReducers = (reducers) => {
    return (state = {}, action) => {
        return Object.keys(reducers).reduce((nextState, key) => {
            nextState[key] = reducers[key](state[key], action);
            return nextState;
        }, {});
    };
};

export { createStore, combineReducers, connect, Provider };
