<!-- import { Form, Input, Button, Checkbox } from 'antd';
import 'antd/dist/antd.css';

 const {Item} = Form;
 const {Password} = Input;

 function App (){
    return (
            <div class="principal">
                <Form name="formulario">
                    <Item label="Usuario" >
                        <Input />
                    </Item>
                    <Item>
                        <Password />
                    </Item>
                    <Item>
                        <Checkbox />
                    </Item>
                    <Item>
                        <Button type="primary" htmlType="submit">Submit</Button>
                    </Item>
                </Form>
            </div>
        );
 }

 <style>
 .principal{
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    border: 0.5px solid black;
    padding: 40px 40px 10px 40px;
    background-color: white;

 }
 .secundario{ 
    text-align: center;
 }
</style>

export default App; -->
import { Form, Input, Button, Checkbox } from 'antd';
const FormItem = Form.Item;

let Demo = React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    console.log('收到表单值：', this.props.form.getFieldsValue());
  },

  render() {
    const { getFieldProps } = this.props.form;
    return (
      <Form inline onSubmit={this.handleSubmit}>
        <FormItem
          label="账户"
        >
          <Input placeholder="请输入账户名"
            {...getFieldProps('userName')}
          />
        </FormItem>
        <FormItem
          label="密码"
        >
          <Input type="password" placeholder="请输入密码"
            {...getFieldProps('password')}
          />
        </FormItem>
        <FormItem>
          <Checkbox {...getFieldProps('agreement')}>记住我</Checkbox>
        </FormItem>
        <Button type="primary" htmlType="submit">登录</Button>
      </Form>
    );
  },
});

Demo = Form.create()(Demo);

ReactDOM.render(<Demo />, mountNode);