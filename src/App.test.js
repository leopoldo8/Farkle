import React from 'react';
import ReactDOM from 'react-dom';
import { render } from '@testing-library/react';
import { generateImage } from 'jsdom-screenshot';
import App from './App';
import { ToStorybook } from './stories/index';

test('renders learn react link', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/learn react/i);
    expect(linkElement).toBeInTheDocument();
});

it('has no visual regressions', async () => {
    // render App into jsdom
    const div = document.createElement('div');
    document.body.appendChild(div);
    ReactDOM.render(<ToStorybook />, div);

    // prevent spinner from rotating to ensure consistent screenshots
    document.getElementsByClassName('story')[0];

    // Take screenshot with generateImage()
    const screenshot = await generateImage();
    // and compare it to the previous sceenshot with toMatchImageSnapshot()
    expect(screenshot).toMatchImageSnapshot();

    // clean up for next test
    ReactDOM.unmountComponentAtNode(div);
    document.body.removeChild(div);
});