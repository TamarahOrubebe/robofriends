import React from "react";
import { shallow } from "enzyme";
import CounterButton from "./CounterButton";

it("renders a CounterButton component", () => {
	
    const mockColor = 'red'

    expect(shallow(<CounterButton color={mockColor} />)).toMatchSnapshot();
});


it("correctly increments the counter", () => {

  const mockColor = "red";

    const wrapper = shallow(<CounterButton color={mockColor} />);

    wrapper.find('#counter').simulate('click');
    wrapper.find('#counter').simulate('click');

    expect(wrapper.state()).toEqual({ count: 2 });
    expect(wrapper.props().color).toEqual('red' );
});
