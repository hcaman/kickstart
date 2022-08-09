import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import factory from '../../ethereum/factory';
import web3 from '../../ethereum/web3';

class CampaignNew extends Component {
    state = {
        minContribution: '',
        errorMsg: '',
        loading: false
    }

    onSubmit = async (e) => {
        e.preventDefault();

        this.setState({ loading: true, errorMsg: '' });

        try {
            const accounts = await web3.eth.getAccounts();
            const sendOpt = { from: accounts[0] };
            await factory.methods.createCampaign(this.state.minContribution).send(sendOpt);
        } catch (err) {
            this.setState({ errorMsg: err.message });
        }

        this.setState({ loading: false });
    }

    render() {
        return (
            <Layout>
                <h3>Create a Campaign !</h3>
                <Form onSubmit={this.onSubmit} error={!!this.state.errorMsg} >
                    <Form.Field>
                        <label>Minimun contribution</label>
                        <Input 
                            label='wei'
                            labelPosition='right'
                            value={this.state.minContribution}
                            onChange={e => this.setState({ minContribution: e.target.value })}
                        />
                    </Form.Field>

                    <Message error header='Oops!' content={this.state.errorMsg} />
                    <Button loading={this.state.loading} primary>Create!</Button>
                </Form>
            </Layout>
        );
    }
}


export default CampaignNew;