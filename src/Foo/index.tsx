import React, { type FC } from 'react';
import {Button} from 'antd';

const Foo: FC<{ title: string }> = (props) => <h4>{props.title}<Button>i am a button333</Button></h4>;

export default Foo;
