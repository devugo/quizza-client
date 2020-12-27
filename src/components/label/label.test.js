import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../helpers/functions/testUtils';
import Label from './index';

describe('Label Component', () => {

    describe('Checking PropTypes', () => {
        it('Should NOT throw warning', () => {
            const expectedProps = {
                name: 'firstname',
                styles: {
                    color: 'white'
                }
            };

            const propsError = checkProps(Label, expectedProps);
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
            wrapper = shallow(<Label {...props} />);
        })

        it('Should render a label component', () => {
            const label = findByTestAttr(wrapper, 'labelComponent');
            expect(label.length).toBe(1);
        })
    });
})