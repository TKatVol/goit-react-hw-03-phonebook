import { Component } from 'react';

import s from '../ContactForm/ContactForm.module.css';

class ContactForm extends Component {
    state = {
        name: '',
        number: '',
    };

    handleSubmit = event => {
        event.preventDefault();

        const { name, number } = this.state;
        this.props.onSubmit(name, number);
        this.resetForm();
    };

    resetForm = () => {
        this.setState({ name: '', number: '' });
    };

    handleChange = event => {
        const { value, name } = event.currentTarget;
        this.setState({ [name]: value });
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit} className={s.form}>
                <label className={s.label}> Name </label>
                <input type="text"
                    name="name"
                    value={this.state.name}
                    pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                    required
                    autoComplete="off"
                    placeholder="James Smith"
                    onChange={this.handleChange}
                    className={s.input}
                />

                <label className={s.label}> Number </label>
                <input type="tel"
                    name="number"
                    value={this.state.number}
                    pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    required
                    autoComplete="off"
                    placeholder="007-007"
                    onChange={this.handleChange}
                    className={s.input}
                />

                <button type="submit" className={s.button}>Add contact</button>
            </form>
        )
    }
}

export default ContactForm;