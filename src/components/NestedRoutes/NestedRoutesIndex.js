import React from 'react'
import {Switch,Route,useRouteMatch} from 'react-router-dom'
import TemplateSelect from '../Form/TemplateSelect';
import Personal from '../Form/Personal';
import Education from '../Form/Education';


function NestedRoutesIndex(){
    let { path, url } = useRouteMatch();
    return(
        <>
        <Switch>
            <Route path={`${path}/template`} exact component={TemplateSelect}/>
            <Route path={`${path}/personal`} exact component={Personal}/>
            <Route path={`${path}/education`} exact component={Education} />
            <Route path={`${path}/work`} exact/>
            <Route path={`${path}/skills`} exact />
            <Route path={`${path}/projects`} exact/>
            <Route path={`${path}/awards`} exact/>
        </Switch>
        </>
    )
}
export default NestedRoutesIndex;