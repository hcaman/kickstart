import React , { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Campaign from '../ethereum/campaign';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class ContributeForm extends Component {
    state = {
        value: '',
        errorMsg: '',
        loading: false
    }

    onSubmit = async (e) => {
        e.preventDefault();

        const campaign = Campaign(this.props.address);
        this.setState({ loading: true, errorMsg: '' });

        try {
            const accounts = await web3.eth.getAccounts();
            const sendOpt = { from: accounts[0], value: web3.utils.toWei(this.state.value, 'ether') };
            await campaign.methods.contribute().send(sendOpt);

            Router.replaceRoute(`/campaigns/${this.props.address}`);
        } catch (err) {
            this.setState({ errorMsg: err.message });
        }

        this.setState({ loading: false });
    }

    render() { 
        return (
            <Form onSubmit={this.onSubmit} error={!!this.state.errorMsg} >
                <Form.Field>
                    <label>Amount to Contrubute</label>
                    <Input
                        label='ether'
                        labelPosition='right'
                        value={this.state.value}
                        onChange={e => this.setState({ value: e.target.value })}
                    />

                    <Message error header='Oops!' content={this.state.errorMsg} />
                    <Button loading={this.state.loading} primary>Contribute!</Button>
                </Form.Field>
            </Form>
        );
    }
}
 
export default ContributeForm;