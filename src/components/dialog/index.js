import { Modal } from 'antd';
import './dialog.scss';

import Button from '../button';
import useWindowWidth from '../../helpers/hooks/useWindowWidth';

const Dialog = ({
    title,
    buttonLeftAction,
    buttonLeftText,
    buttonRightAction,
    buttonRightText,
    children,
    open,
    close,
    hideFooter=false

}) => {
    const width = useWindowWidth();

    return (
        <Modal
            centered
            visible={open}
            onCancel={close}
            footer={null}
            width={width > 1024 ? '60%' : width > 767 ? '90%' : width > 360 ? '95%' : '100%'}
            bodyStyle={{ padding: 0}}
        >
             <div
                style={ 
                    width > 767 ? 
                    { paddingLeft: 60, paddingRight: 60, paddingTop: 40 } : 
                    { paddingLeft: 20, paddingRight: 20, paddingTop: 40} } 
                    className="dialog-title"
                >
                <h2 style={{fontSize: 20}}><strong>{ title }</strong></h2>
            </div>
            <div 
                style={ 
                    width > 767 ? 
                    { paddingLeft: 60, paddingRight: 60, paddingTop: 10, paddingBottom: 10 } : 
                    { paddingLeft: 20, paddingRight: 20, paddingTop: 10, paddingBottom: 10 } 
                } 
                className="dialog-content"
            >
                { children }
            </div>

            {
                !hideFooter  &&
                <div 
                    className="dialog-footer" 
                    style={ 
                        width > 767 ? 
                        { backgroundColor: '#f7f7f7', height: 80, display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 60, paddingRight: 60} :
                        { backgroundColor: '#f7f7f7', height: 80, display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingLeft: 20, paddingRight: 20}
                    }
                >
                    <Button clickAction={buttonLeftAction} text={buttonLeftText} styles={{width: 160, height: 40, color: '#f62f5e', backgroundColor: 'white', borderColor: 'white', outlineColor: '#f7f7f7' }} />
                    <Button clickAction={buttonRightAction} text={buttonRightText} styles={{width: 160, height: 40, outlineColor: '#f7f7f7'}} />
                </div>
            }
            
        </Modal>
    )
}

export default Dialog;