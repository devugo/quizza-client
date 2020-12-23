import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../helpers/functions/testUtils';
import Textarea from './index';

describe('Textarea Component', () => {

    describe('Checking PropTypes', () => {
        it('Should NOT throw warning', () => {
            const expectedProps = {
                name: 'firstname',
                styles: {
                    color: 'white'
                }
            };

            const propsError = checkProps(Textarea, expectedProps);
            expect(propsError).toBeUndefined();
        });
    });

    describe('Component Renders', () => {

        let wrapper;
        beforeEach(() => {
            const props = {
                name: 'firstname',
                styles: {
                    color: 'white'
                }
            }
            wrapper = shallow(<Textarea {...props} />);
        })

        it('Should render a teatarea component', () => {
            const textarea = findByTestAttr(wrapper, 'textareaComponent');
            expect(textarea.length).toBe(1);
        })
    });

    describe('Should NOT render', () => {
        let wrapper;
        beforeEach(() => {
            const props = {
                styles: {
                    color: 'white'
                }
            }

            wrapper = shallow(<Textarea {...props} />);

        })

        it('Component is not rendered', () => {
            const textarea = findByTestAttr(wrapper, 'textareaComponent');
            expect(textarea.length).toBe(0);
        })
    });
})