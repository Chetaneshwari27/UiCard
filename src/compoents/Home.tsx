import React from 'react';
import { Typography, Avatar, withStyles, Grid, Button, WithStyles, createStyles } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import image from '../assets/image.jpeg';

interface State {
    showAdditionalSkills: boolean;
}

interface HomeProps extends WithStyles<typeof styles> { }

const styles = createStyles({
    CardContainer: {
        padding: '20px',backgroundColor: '#E1EBEE',margin: '30px',
    },
    Image: {
        width: '70px',height: '70px',borderRadius: '50%',
    },
    Location: {
        fontSize: '20px', marginRight: '5px', color: 'green',
    },
    SkillButton: {
        marginRight: '3px', backgroundColor: '#008E97', color: 'white',height: '35px',
    },
    '@media (max-width: 768px)': {
        CardContainer: {
            flexDirection: 'column',},
        Image: {
            width: '50px',height: '50px', },
        Location: {
            fontSize: '16px', },
        SkillButton: {
            fontSize: '12px', padding: '4px 8px', marginRight: '5px', height: '30px',  },
    },
    '@media (max-width: 375px)': {
        CardContainer: {
            padding: '10px', margin: '10px', },
        Image: {
            width: '40px',height: '40px', },
        Location: {
            fontSize: '14px',},
        SkillButton: {
            fontSize: '10px', padding: '2px 4px', marginRight: '3px', height: '25px',},
    },
});

class Home extends React.Component<HomeProps, State> {
    constructor(props: HomeProps) {
        super(props);
        this.state = {
            showAdditionalSkills: false,
        };
    }

    toggleAdditionalSkills = () => {
        this.setState((prevState) => ({
            showAdditionalSkills: !prevState.showAdditionalSkills,
        }));
    };

    render() {
        const { showAdditionalSkills } = this.state;
        const additionalSkills = ['PHP', 'SQL', 'Android', 'Android', 'Skill 5', 'Skill 6', 'skill7'];

        const { classes } = this.props;

        const defaultSkills = additionalSkills.slice(0, 3);
        const remainingSkills = additionalSkills.slice(3);

        return (
            <div className={classes.CardContainer}>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={8}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <Avatar alt="Person Image" src={image} className={classes.Image} />
                                <div style={{ backgroundColor: 'blue', borderRadius: '25px', color: 'white', alignItems: 'center', paddingLeft: '10px' }}>
                                    <Typography>Online</Typography>
                                </div>
                            </Grid>
                            <Grid item>
                                <div>
                                    <Typography>Web Designer | UI/UX Designer</Typography>
                                </div>
                                <div style={{ display: 'flex', alignItems: 'center' }}>
                                    <LocationOnIcon className={classes.Location} />
                                    <Typography variant="body2">Lativa in Europe</Typography>
                                </div>
                            </Grid>
                        </Grid>
                        <Typography style={{ marginTop: '20px' }}>Has 10 relevant skills to your job</Typography>
                        <Grid container style={{ marginTop: '10px' }}>
                            <Grid item>
                                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                    {defaultSkills.map((skill, index) => (
                                        <Button key={index} className={classes.SkillButton}>
                                            {skill}
                                        </Button>
                                    ))}
                                    {showAdditionalSkills &&
                                        additionalSkills.map((skill, index) => (
                                            <Button key={index} className={classes.SkillButton}>
                                                {skill}
                                            </Button>
                                        ))}
                                    {!showAdditionalSkills && remainingSkills.length > 0 && (
                                        <Button onClick={this.toggleAdditionalSkills}>+{remainingSkills.length}</Button>
                                    )}
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm={4} style={{ borderLeft: '1px solid lightgrey', marginLeft: 'auto' }}>
                        <Grid container spacing={1} direction="column" alignItems="flex-end">
                            <Grid item style={{position:"relative", top:"20px"}}>
                                <strong style={{fontSize:"25px"}}>$10.00</strong>/hr
                            </Grid>
                            <Grid item style={{position:"relative", top:"30px"}}>
                                <Typography>Hourly Price</Typography>
                            </Grid>
                            <Grid item>
                                <Button style={{ background: '#206FC4', color: 'white' ,position:"relative", top:"60px", width:"120px"}}>Hire</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Home);
