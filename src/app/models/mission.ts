export interface Mission{
 mission_name:string;
 launch_year:string;
 details:string;
// mission_patch_small:string
links:{
     mission_patch_small:string
};
rocket:{
    rocket_name:string,
    rocket_type:string
};
launch_site:{
    site_id:string,
    site_name:string
}

}