import React, { useState } from 'react';
import { IDefaultProps } from '../../styles/styles';
import { Button, Grid, Link, TextField } from '@material-ui/core';
import { appStore } from '../../AppStore';
import CopyToClipboard from 'react-copy-to-clipboard';
import { observer } from 'mobx-react';

export const ImportExport = observer((props: IDefaultProps) => {
    const { marketManager } = appStore;
    const [ importField, setImportField ] = useState('');

    return <Grid container direction='column' spacing={ 1 }>

        <Grid item container spacing={ 1 }>

            <Grid item>
                <Button fullWidth variant='contained' onClick={ () => marketManager.importStocksString(importField) }>
                    Stocks Import
                </Button>
            </Grid>

            <Grid item xs>
                <TextField fullWidth multiline value={ importField } onChange={ e => setImportField(e.target.value) }/>
            </Grid>

        </Grid>

        <Grid item container spacing={ 1 }>

            <Grid item>
                <CopyToClipboard text={ marketManager.exportString }>
                    <Button fullWidth variant='contained' onClick={ () => appStore.successMessage = 'copied' }>
                        Copy Stocks Export
                    </Button>
                </CopyToClipboard>
            </Grid>

            <Grid item xs>
                <TextField fullWidth multiline value={ marketManager.exportString }/>
            </Grid>

        </Grid>

        <Grid item container spacing={ 1 } alignItems='center'>

            <Grid item>
                <Link href='https://www.realmeye.com/edit-offers-by/SaintBen' variant='button'>
                    RealmEye
                </Link>
            </Grid>

            <Grid item>
                <CopyToClipboard text={ marketManager.tradeString }>
                    <Button fullWidth variant='contained' onClick={ () => appStore.successMessage = 'copied' }>
                        Copy Trades String
                    </Button>
                </CopyToClipboard>
            </Grid>

            <Grid item xs>
                < TextField fullWidth multiline value={ marketManager.tradeString }/>
            </Grid>

        </Grid>
    </Grid>;
});
