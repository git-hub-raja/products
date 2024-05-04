import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';

export class ReactCompLifeCycleHooks extends React.Component {

    /**
     * Constructor hook. This will called in Mounting phase
     * @param {*} props , Holds current properties of the component
     */
    constructor(props) {
        super(props);
        this.state = {
            name: 'Knowleadge Transfer'
        }
        console.log("ReactCompLifeCycleHooks : constructor");
        console.log("props : ", props)
        console.log("state : ", this.state)
    }

    /**
     * Hook to read state from the props. This will be invoked both in Mounting and Updating phase
     * @param {*} props , Holds current properties of the component
     * @param {*} state , Holds current state of the component 
     */
    static getDerivedStateFromProps(props, state) {
        console.log("ReactCompLifeCycleHooks : getDerivedStateFromProps");
        console.log("props : ", props);
        console.log("state : ", state);
        return {
            count: state.count ? state.count : props.count
        };
    }

    /**
     * This will be invoked in Mounting phase just after the component is rendered
     */
    componentDidMount() {
        console.log("ReactCompLifeCycleHooks : componentDidMount");
        console.log("props : ", this.props);
        console.log("state : ", this.state);
    }

    /**
     * Hook to decide whether the component sholud update or not
     * @param {*} nextProps , Holds next properties
     * @param {*} nextState , Holds next state.
     * @returns 
     */
    shouldComponentUpdate(nextProps, nextState) {
        console.log("ReactCompLifeCycleHooks : shouldComponentUpdate");
        console.log("nextProps : ", nextProps);
        console.log("nextState : ", nextState);
        return true;
    }

    /**
     * Hook to capture the snapshot of the data
     * @param {*} prevProps , Holds previous properties
     * @param {*} prevState , Holds previous state
     * @returns 
     */
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("ReactCompLifeCycleHooks : getSnapshotBeforeUpdate");
        console.log("prevProps : ", prevProps);
        console.log("prevState : ", prevState);
        return {
            count: prevState.count
        };
    }

    /**
     * This will be invoked in updating phase just after the component is re-rendered
     * @param {*} prevProps , Holds previous properties
     * @param {*} prevState , Holds previous state
     * @param {*} snapshot , To hold the snapshot of the current DOM state
     */
    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("ReactCompLifeCycleHooks : componentDidUpdate");
        console.log("prevProps : ", prevProps);
        console.log("prevState : ", prevState);
        console.log("snapshot : ", snapshot);
    }

    /**
     * This will be invoked in ummounting phase just before the component is unmounted
     */
    componentWillUnmount() {
        console.log("ReactCompLifeCycleHooks : componentWillUnmount");
    }

    /**
     * This will be invoked when an error occurs in child component and helps to update the state if required
     * @param {*} error , This holds the error data
     * @returns 
     */
    static getDerivedStateFromError(error) {
        console.log("ReactCompLifeCycleHooks : getDerivedStateFromError");
        console.log("error : ", error);
        return {
            hasError: true
        }
    }

    /**
     * This will be invoked when an error occurs in child component and helps to log the error throw external logging service
     * @param {*} error , This holds the error data
     * @param {*} info , This holds additional info about the error
     */
    componentDidCatch(error, info) {
        console.log("ReactCompLifeCycleHooks : componentDidCatch");
        console.log("error : ", error);
        console.log("info : ", info);
    }

    /**
     * This will be invoked in both Mounting and Updating phase
     * @returns the component
     */
    render() {
        console.log("ReactCompLifeCycleHooks : render");
        console.log("props : ", this.props);
        console.log("state : ", this.state);
        return (
            <>
                <Container className='mt-5'>
                    <h1 className='text-danger'><u>{this.state.name}</u></h1>
                    <h2>Count : {this.state.count}</h2>
                    <Button onClick={() => this.setState({count: this.state.count + 1})}>Increment Count</Button>
                </Container>
            </>
        )
    }
}

function ReactCompLifeCycleHooksHOC() {
    return <ReactCompLifeCycleHooks count={30} />
}

export default ReactCompLifeCycleHooksHOC;