import React from 'react';
import { Typography, Avatar, withStyles, Grid, Button, WithStyles, createStyles } from '@material-ui/core';
import LocationOnIcon from '@material-ui/icons/LocationOn';

interface State {
    showAdditionalSkills: boolean;
}
interface HomeProps extends WithStyles<typeof styles> { }

const styles = createStyles({
    CardContainer: {
        padding: '20px', backgroundColor: '#E1EBEE', margin: "30px",
    },
    Image: {
        width: '70px', height: '70px', borderRadius: '50%'
    },
    Location: {
        fontSize: '20px', marginRight: '5px', color: 'green'
    },
    SkillButton: {
        marginRight: '3px', backgroundColor: "#008E97", color: "white", height:"35px"
    },
    '@media (max-width: 768px)': {
        CardContainer: {
            flexDirection: 'column'
        },
        Image: {
            width: '50px', height: '50px'
        },
        Location: {
            fontSize: '16px'
        },
        SkillButton: {
            fontSize: '12px', padding: '4px 8px', marginRight: '5px'
        }
    },
    '@media (max-width: 320px)': {
        CardContainer: {
            padding: '10px', margin: '10px'
        },
        Image: {
            width: '40px', height: '40px'
        },
        Location: {
            fontSize: '14px'
        },
        SkillButton: {
            fontSize: '10px', padding: '2px 4px', marginRight: '3px'
        }
    },
    '@media (max-width: 375px)': {
        CardContainer: {
            padding: '10px', margin: '10px'
        },
        Image: {
            width: '40px', height: '40px'
        },
        Location: {
            fontSize: '14px'
        },
        SkillButton: {
            fontSize: '10px', padding: '2px 4px', marginRight: '3px'
        }
    }
})
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
        const additionalSkills = ['PHP', 'SQL', 'Android', 'Android', 'Skill 5', 'Skill 6', 'Skill 7'];

        const { classes } = this.props;

        const defaultSkills = additionalSkills.slice(0, 3);
        const remainingSkills = additionalSkills.slice(3);

        return (
            <div className={classes.CardContainer}>
                <Grid container spacing={4} >
                    <Grid item xs={8} sm={8}>
                        <Grid container spacing={2} alignItems="center">
                            <Grid item>
                                <Avatar alt="Person Image" src="data:image/jpeg;base64,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"
                                    className={classes.Image} />
                                <div style={{ backgroundColor: 'blue', borderRadius: '25px', color: 'white', alignItems: "center", paddingLeft: "10px" }}>
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
                        <Typography style={{ marginTop: "20px" }}>Has 10 relevant skills to your job</Typography>
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
                                        <Button onClick={this.toggleAdditionalSkills}>
                                            +{remainingSkills.length}
                                        </Button>
                                    )}
                                </div>
                            </Grid>
                        </Grid>
                    </Grid>
                    <Grid item sm={2} style={{ borderLeft: "1px solid lightgrey", marginLeft: "auto" }}>
                        <Grid container spacing={1}>
                            <Grid item style={{ position: "relative", top: "40px" }}>
                                <strong style={{ fontSize: "30px", marginLeft: "63px" }}>$10.00</strong>/hr
                            </Grid>
                            <Grid item style={{ position: "relative", top: "40px", marginLeft: "90px" }}>
                                <p>HourlyPrice</p>
                            </Grid>
                            <Grid item style={{ position: "relative", top: "70px", left: "36px" }}>
                                <Button style={{ background: "#206FC4", color: "white", width: "145px" }}>Hire</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

export default withStyles(styles)(Home);