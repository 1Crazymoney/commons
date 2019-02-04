import React, { ChangeEvent, Component, FormEvent } from 'react'
import { Link } from 'react-router-dom'
import Button from '../components/atoms/Button'
import styles from './Home.module.scss'

interface IState {
    search?: string
}

interface IProps {
    history: any
}

class Home extends Component<IProps, IState> {

    public state = { search: '' }

    public render() {
        return (
            <div className={styles.home}>
                <div>Home</div>

                <Link to={'/styleguide'}>Styleguide</Link>

                <div>
                    <form onSubmit={this.searchAssets}>
                        <input type="text" name="search" value={this.state.search} onChange={this.inputChange} />
                        <Button>Search</Button>
                    </form>
                </div>

            </div>
        )
    }

    private inputChange = (event: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    private searchAssets = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        this.props.history.push(`/search?q=${this.state.search}`)
    }
}

export default Home
