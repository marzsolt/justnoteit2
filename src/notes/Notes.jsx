import React, { useState, useEffect } from 'react';

export default function Notes() {
    return (
        <div className="row">
            <div className="col-md-4 mt-5 text-center">
                <div className="card">
                    <h4 className="card-header">BIP</h4>
                    <div className="card-body">
                        <a href="http://users.itk.ppke.hu/~nasma1/jegyzetek/ipa_en_p.pdf">
                            <img src="https://assets.skyfilabs.com/images/blog/innovative-image-processing-based-final-year-projects-for-students.jpg" style={{width: 200, height: 200}} alt="Basic Image Processing Algorithms"/>
                        </a>
                        <div className="fb-like" data-href="http://users.itk.ppke.hu/~nasma1/jegyzetek/ipa_en_p.pdf" data-width="" data-layout="box_count" data-action="like" data-size="small" data-share="true"></div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 mt-5 text-center">
                <div className="card">
                    <h4 className="card-header">Biometrics</h4>
                    <div className="card-body">
                        <a href="http://users.itk.ppke.hu/~nasma1/jegyzetek/ipcv_biom_en_p.pdf">
                            <img src="https://www.romaniajournal.ro/wp-content/uploads/2019/12/biometrics-750x430.jpg" style={{width: 200, height: 200}} alt="Biometrics"/>
                        </a>
                        <div class="fb-like" data-href="http://users.itk.ppke.hu/~nasma1/jegyzetek/ipcv_biom_en_p.pdf" data-width="" data-layout="box_count" data-action="like" data-size="small" data-share="true"></div>
                    </div>
                </div>
            </div>
        </div>        
    )
}
