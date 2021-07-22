import React from 'react'
import {Switch,Route,useRouteMatch} from 'react-router-dom'
import TemplateSelect from '../Form/TemplateSelect';
import Personal from '../Form/Personal';
import Education from '../Form/Education';
import Experience from '../Form/Experience';
import Skill from '../Form/Skill'
import Project from '../Form/Project'
import Award from '../Form/Award';
import GenCompPdfPreviewer from '../generator/PdfPreview';


function NestedRoutesIndex(){
    let { path} = useRouteMatch();
    return(
        <>
        <Switch>
            <Route path={`${path}/template`} exact component={TemplateSelect}/>
            <Route path={`${path}/personal`} exact component={Personal}/>
            <Route path={`${path}/education`} exact component={Education} />
            <Route path={`${path}/work`} exact component={Experience}/>
            <Route path={`${path}/skills`} exact component={Skill} />
            <Route path={`${path}/projects`} exact component={Project}/>
            <Route path={`${path}/awards`} exact component={Award}/>
            <Route path={`${path}/preview`} exact component={GenCompPdfPreviewer}/>
        </Switch>
        </>
    )
}
export default NestedRoutesIndex;