import React from 'react';
import Button from '../shared/Button/';
import IconButton from '../shared/IconButton/';
import MenuIcon from '@material-ui/icons/Menu';

import styles from './styles.scss';


export default function Module() {

    return (
        <div className="root">
            <div className="viewport">
                <div class="header">
                  <IconButton><MenuIcon /></IconButton>
                  <Button>abc</Button>
                </div>
                <div className="sidenav">
                  <Button>abc</Button>
                </div>
            </div>
        </div>
    );
}
