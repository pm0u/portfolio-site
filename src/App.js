import React, { Component } from 'react';
import './index.css'
import AboutMe from './components/AboutMe'
import SideNav from './components/SideNav'
import Project from './components/Project'

class App extends Component {
  state = {
    view: 'about me',
    projects: [
      {
        name: 'vimulator',
        description: 'Proof of concept for an open source in-browser Vim simulator, currently being refactored and expanded to use ReactJS and Redux. Intended to meet gaps in current learning resources and mimic Vim as closely as possible, thereby easing transition. Built using ReactJS, Redux, Jest, TravisCI, Node, PassportJS, PostgreSQL',
        github:'https://github.com/pm0u/vimulator',
        hosted:'https://vimulator2.surge.sh/',
        small:'https://lh3.googleusercontent.com/TD6ZzktbZijpUvRr4ctQZEkG5_HohuwsbSZyJB0py0Odo2x7j1BzYPtU1JrcqJZj_dnPzdiM47luPVL_MP1Wn33bbOFuEa8cdDk31_xcvB-idPbVjHv7MBWsC1buJUt-xBwqz0QL3EZGY0BBzIAyzF_S5QTGSD0VmQbgsyChEIBlxjq2-AfuZceKA_rBOJqLlhp3To4eN3eXpk4O28G6GlAiduQ1JjMfwH2lD7TkqmdptzjM2_TC1tA1403TT7OdFUfuL3gYYPMBwrFSNZ0O3yizVfFkAV7xGjuwML72iEv0ssvtnkVRRoqS1FGFvBajFPjSXivPteLZIaiNLYsLklHUdQybDeLOBC_m9818-sbJd0GWaFv2WLAR2K9kBJOnQQZ5vsiFDaFGLEgo_5NhSylKofRWhPYKZBVnhE5FALypmUuafVRBgYjOIw-IOq2m_ZlXMv0jjZmneKUggw2A0rqZkjCZRuqlJsrUAINepio7lGUfkAWrmqH909_wv4CP5z-kDqZ7i96G9MRsVqKO8H0p86nCPyNb_MWL6lOz86UAhI-24xmUuSem0ErM5EEItKefz41_bnYnEYmndrC4WhUeg34M08nymkBcuhk99AHQteesIR2Po-Jp1wtJ_5VCf3VfbP2E0X94WBxr12lpMwI7Z0RMCEUa=w500-h253-no',
        large:'https://lh3.googleusercontent.com/EyjOioB79SruaA1qAcToII3B-p8fCwrV4Pxi8Zkuv6Nvvz8S1WXtNOTtiARAlYp4eNvISpKBmJ_MI4Q2ueMjj18SzF9ytgAKw4K-2PfiFOlkeyvQWR5bzwNlb4Z0DQ_M94EIKEaKgPGwMB0WdAnqmjSTT0PqNsFip6YbaCVc_m3sWLA7MqVDh8tkR8gIvsH-vQiaNyQ38zSU99hMUkRzMwtlGjjaNVXOXKlh0_qCGTjDx8KS1pMgCow5j8az85QJ7fQCyu0dTLAkphRZM9iKzA_1Iarr8khcXRZJuKd4mrRRrvaAANe95akHjZqpr6-FHcHBx_AqPFhENyCPLbsQod4byt3SFtXswhElv3tn_jsF3O-qJImyAEAhfqULCb3VTWUfT6a3szupoVIRu6h8uvSOWa4bXtLB-9wEda69iPq7XrfgP3spMBXLvWo7HBjcE2bchISynjfcUSVgyR2Gn7PJ2JHcvxoAzXx-JbX0ziKCwQOn-KrOF3TzSYW41eVwZBEhEXbnp5fntYPNBSYoLN7hxoI5w1eKKS0btaJ8OyCFhM3OYndBQ5oTz276fhyeBHMa1fDQJN_Bye7LJ10PQjJ-h-jQ3rGi4GKWH3IMusJiVFqIx8lntDL0YJPX2SscBgEofR905LZoQXaEap-atjnd9trw9lwk=w1816-h920-no'
      },
      {
        name: 'spotify rewind',
        description:'A version control system for Spotify playlists. Backup and restore your spotify playlists. Never lose a playlist again. Built using ReactJS, HTML, CSS, JavaScript, PostgreSQL, Bootstrap, KnexJS, Node.js, Express, Heroku, Spotify API, and PassportJs',
        github:{'Front End':'https://github.com/blucky36/spotify-rewind-frontend', 'Back End':'https://github.com/blucky36/Q3spotify-rewind-backend'},
        hosted:'https://spotify-rewind.surge.sh/',
        small:'https://lh3.googleusercontent.com/wmo9MUKFslZcW5W6tvliJgq2kaXoya0IsRoxIXDK6SRhgDUVgZQqTkg2_I2ymPgWOZ9TWkJSlbbxZDniRVqY7sli42XXHqLSHne2XuDobNy7eRpQxm_yLewyjlEGMFcNdyJuuXAkvyhfON4818tjbqpHdIG_u44gcarYv85EeJGz_ef3D_ynpUz2gONUjiZmbF_7lO66BgSOyM0OrU0dLrfMwh0MxukteYad5yviGy3j-m23H_mTWqjdZpz3zZdmttmm1ZQ0wz5c2TCbz2YOKcv3zkIvYn9CKWbeD3CpZhYXiKYGwYixxQxPCNb_FjrSFd8qBSR09Dc7LgvYe1ysBwr45HLiNvRHDNedvcfKp4r3eDX8KmWuEyefjXrWd7n8BpsPmNOZXVqIadkXn7vuPZaYIBHtvekQ6onq6LPNP1mc5lHAb979R7FvX1SmFPLbLmFpX2ZLarSz7C2g1w0rbp7DSmHxk4jjzlKuS1Dtnsvjcxhr1wP6C1BYR48QbA-MUAhdISOi009OM4Ne9slnLREcjTgD5ZMHHwW2FTlrV1sucqLADKCObw6llG_70Zt8rgPhB_8KrbtCYl3hyn_RP8aAZWH0A6Rj7_xsBLMytDAx8MOiMVUhR7cymptyee5ynRtkckxK06cluFFIXwrnKttaVHYYLV0e=w500-h254-no',
        large:'https://lh3.googleusercontent.com/KEM4XkIKyzsZREhoPoxBi-MC42Ur_RzHe2foghLiAR66W51SMG20Q5Y5Hqy7nO6SuxMr-xETEuJhECPXr3nIF4--ojURLW57qrobX43cSlykeLoyilgtR0eG5UuMkHzweXVJsRZ_dAsK0A-iUvxMXEfh_Q3Yrk7zQ9FmZhklVi58AaKyAH-EVTdCjt00dUek3mg9s0H_FYI9ESSzW4G9v5CSw-Biex4Hb4erLi5YdvtcCV8_EG10iET1jeawmiihbBaUqasZmeXPBtYXgKOxjLZe_f_sn2Wbzm0Yd7qHzp4rso5VH_INqW_6hIkRpIjHdcNEC2ZDf3jtzTAIJeukRuWNrsk9zNRFFZNalWcZGwNhYpd70ACKxCtHZuXDUpwQ2Yu86ZTtmh_cFHxI0inopv9WUc1LMNOB5Z89tyUj6I7IkVBqkv0cJvhBz4UQGjo46J-QAAx-E2KBs-u681Mbyj7EPrSodYuGZFqMNHMIqKcQsFS-6cb-YHETK22l9zzCISL5XC_6bGkE7_XgSN3py_bKPMzB9dpMdyYPAUWHAG69YLczWXTnQfd2Zm7-JViwje0hlFVzEcrrhE80osWrqtBlHQ4nVhcPwoVR84PBuWZ_OetwnvSKr0CskNFuIWng5O2lzi12tmfEp0wp2Rf7xjgY2K0pOy5K=w1820-h920-no'
      },
      {
        name: 'TheForRealDonaldTrump',
        description:`This was one of my first react native apps. what it does: scrapes donald trumps tweets from 2009 (stored locally) and pulls tweets that have words related to the word confused (based on a list I found online). pulls the first 5 images from google image search for 'donald trump confused.' randomly pairs these 2. displays them on a fake instagram feed with random number of likes, random post time, and random number of comments`,
        github:'https://github.com/pm0u/TheForRealDonaldTrump',
        hosted:'',
        small:'https://lh3.googleusercontent.com/ORclWwgcp0A78SETWckZOTi9s8YWK4NocY2qhTPY6Vo1wod08sUizmlKo1KqvW0LCTSMcBCIdGnjunqCexZFIIKBdq5Dw0tY9SYiR3WV0ocHHfHZJqBQvKVTLnLlb740xp3V-qKAfAad3KBFEqfanuzNTtr_YEdA2Ha4GQ5FQkLGmi1uBOrD1QcqsrnX5CE3-a10MhJKxiT7LynT5rzgVuN-a4VwzG7T6NiaWDu_5PC9HRiQk4H73M9vNDgPKuIAGtvvRGEmEXPn0XbFupCBnSnfljXFYvjK4jbN0PpBhEZkNV46-GHiBNx2_xaQ6GSHTTC6MNSSliQXLdgCt1ie29WHndBfs_Lvhru9kSeMQfhhDLRUKfduFJdrJLuqAZZneagNVfMrRrpJZBQOJueXf2BvVowDgruF1u3AYeGq8_JoAlY9J6-pLjweXkJSQzE1DgZiU9eeyv2GkubdwNoRAoihcssZI1536DM-l-7th1Vbh1YDk6CiU_R92LXDNMK5SSkMBRm1FfUfUTdLyG9Li5mtRblLgkHJrQNMM-0vBwOv1s4Upxz1-CBkDDIZY15gEPL8AtwI5X2F6Sl3_Q9cVpFPKSjZPocS6xj2DVkNsnkYO_uPYlhFaVp4T-PxPZNN1B3ogteOU_hg4pXoaxObxfiZyt2dKNl2=w500-h1000-no',
        large:'https://lh3.googleusercontent.com/8a6gbBPE20mYDXuoTM7r_XxrmUmrZeXMyV_OEjdRHKctUyBtUuFYoTAlkG29AtYtL8BScHLTuNzwLuKg30ySBWaVzZh6GGFMxtJQT9I6B2OFU7L-gDu-JnaJvV0vx_6Q6fx4Bgj2-uhxF_gX7xzxMQH2mOcWCZnC-oQ4QyvF4XjvYQcdmrdYGkY4-yVIVKunsGt7HormcnAU_NSWZRGkFGvFnDwVb4lRnuIjGkA6rZDEGqOymt9_IbT0vspAaSIhAHI4sCtpUnP35PtRoDImDAr7TmD9nTO0B77bA2_2XCWvQq66Q2i9fcgh7jZh-JBhxuCpdq51MyYYN8FTtSnapzwgBIStyWu25ftvYsDk3ZEVo6lTnC2Wx0kHCUfAMJ_C2l3USy-JVj-Dni49YPN6nS1SulcV782tYd0m1cCR8X1g6HdwK_b1dpbl2_vywlEhd-19cGePNnU4h6scqx20pfXXxbPvXDc8NT7tH3_pz_fQ8DqDQZfxC3ZQ5boXsFipHbJMpKD_8snfF7FLjH3ZIDReAqKsoOBAnp39kXmohRKIYp4YcbXBm87vqZgYCLKK3WMPU923v2EV-wZYj_HgvaqKJyJSHRHgiX-mfNu0OY3_ebIr2RUCeW5ryL2WFOgLBG6sUyhmNVwFhtKkgF6prE7ZSWD4ldA7=w460-h920-no'
      },
      {
        name: 'wheelbuilding',
        description:'A web page I made in react to explain how to build a bicycle wheel. Built in ReactJS and Materialize.',
        github:'https://github.com/pm0u/wheelbuild-page',
        hosted:'http://paulm-wheel.surge.sh/',
        small:'https://lh3.googleusercontent.com/zS7OKxD6hsc6lL6YUwejY__cRzKL0jyglvu-59rX2wunPZnugNsOVuabURJpqAoEVd4CaayfK4Zqb1Cuwb7Y7J2hIa2R2_tXzOkm2gQfhEN41wwT9Yo-VejxmRqi6JwDudOPsnccj_XnZBmy0nTxIWVVfXbVzDk_Jx8iwHIg_g5G2WlMyaNJ70_AY-C9c_CbEBbZujZwLioM8fmL_uUEC4HpFrfYiN6tvHGxlPAODuSrTawyKPfQ1QwTEol62DLOn3bWvwZCRSTjLgtWoEST5kZ4aJd5kw2h03d4PvjLqXR3nXQpPyv1Y0AD16mlXZZqlA94h4NaXvOrj4bkCLSA3X7YELW9d0F-Op9mFJOVZldExvDAVSz8QTzoyrIH9KJYXrwNaijesiV8RGxbACNnYo3O7DlXTe0hwMRdTaeFofOrsZHe_bnfAEjubuO--uK-wjoTemdQelcgEWsg9Sjs26pFsaDuzjpZbNW4kbZrqLxRLqACCAC4YxYxIcNhq6PdyMp5xvkZY9rxkLJLWXOtjPhunrYrnLxjL0SGZKRaM6TDHNqPcLmVM8v0gysKcZgyDpho3UsTXu1FhpB8vI1CrmjzbmVIlXvxEvU3_Y8ziT-k2dIiZZtedUvigVRC-rNjIci-lLRNXyn_LeFVjhiuf63jZ28cIq0g=w500-h253-no',
        large:'https://lh3.googleusercontent.com/IRyEOCk80DRClWceU8iIiscu1QvMI1cNwpEh4iqK0WfdpzaE6NoGa0jJTFE8Joeja1UImwtQj6qmqrlhPrDcy_ulqLPqlAT-dF_xwa0wuW9xolovN9OXJ1WmR7-PYXU09_Q_8E5MnHPAwpjE-WH56P0qunJvvest7Vc3wTBvuJxE9bmdWTv7SYnS56VMl13-DuRNmYHphLiPk2i-5zDEH3eubco7RmjcGHWft2lisYOpGemC8myr1YgGIAiUCE6mnySeM9CfKCOG7WVsHkSe59PJBTaW5vZIRoVMMQ6e9X1I9-tM6g3li7LBTd0Ny09JnFmcV6--E7G4sjUdAohJI5jPlsjLjxL5UNQrfAH_hyTpeA5Drszr6T11jKA2GsFP4FHMy0JJGSS4_XxhlHEgtwksrCKCARXr03qT1f0qfErCOa1YuMwgN3NQVu9w2blbDEQRFzl8D8eWSXFwCgI8NkIT5cY5FWMSgmWf7qY-pZrXusfDwIAxRKeUG7o8AXmOjgH5WolVzX9GFrOeWrUxbfOTd1ET5VKQR2puUF1i8ZS3y3Z8DJg0rqDY-EIUAOViLs1VCajWro8G75ZY2-RMxEk6_JJ_tloGoeeT5mCle0xxE2HWkks_SvAw-Xbj6v7jVqklDQoK-w6rB7nib-q-j56lN0TYFfwh=w1916-h969-no'
      },
      {
        name:'cli-mountains',
        description:'A small command line utility I made to remind myself of the mountains from the console. Uses Flickr API to retrieve a random photo containing mountains and then display it in the console using colored ASCII characters. Built using Node.js, Flickr API, jimp, Axios, and image-to-ascii',
        github:'https://github.com/pm0u/cli-mountains',
        hosted:'',
        small:'https://lh3.googleusercontent.com/IkeaxaoJ22VVhJLWk-03qIoIuOg9HoCYMCIBTCfGO9GDFTiNgZSSNREUpZaA9socJHE3SGWdagibgexc3NkjHVz9EuYhya42_EJA0LToKHvw1AW8srFM-WjUB7UBPGaMUuSuiO_dcA7WNLNZK8yRiAYlcs9JM992qYts3mH0qnFbz_mR6DoM5unWQqsFaLWdebSbOnxjnUMjSzKQ7kgfRN2uNgzF77HxouIQHSGvnb7k2kM-ZPkqiBnfgnX0lDbZxsdSmmBjKeoeScl5QX4jyck7KIxAfegNpniaA-T52Izs7g4-cPJlz2CuWwGjKmLwwKCMbk7d7rDPqntgb-SwEjPdtXRsohmovVUL_WYHbPh2BCEt8PHMwEoV05r0jICgcH7Zml31ppUrPVnvcNCiimMcPOcejAdnPXMjVpLrRYUxj8ahZmCaRonX5DtUj10KXjlRWcoMckBvAk8vfMqxVLkq-XU_NnnCpdRp9bsqGIbzgat2LiuARjT6ulCLPXhhSiG5vdL7iLeli3TyustKs_nVmDV_xIz52ds7hroUttc1-sjX3MD7s1GFPIPwe4-Fht8rE4qHlwSCRlLREgwRMbtPk-2jx01S-NyKv7aW6y76UWAjaZUzcoo6Ts6BTV0fOa3iFPN7Q7stU5ddec_fD8GAPlZJP4Bn=w500-h272-no',
        large:'https://lh3.googleusercontent.com/UWt4Ggike1lJbr-gptfWXyVMeRMW3PkPu9qw4OA1MCgkC6mAonwf53hw2RSUQYqRA33lUejKre5vFq2hT0yydj8e9kGsEPF3me-lH44hVl3uYsBCsad4xBZuD9u5kAXsZlq6CevTeu6z8Pulnz1nurg6_wYB3wRLmQFBiFIZbnp2g9WaRw33dAKsdkVAdKhXKQvXarSbhXWrSK6qd4wfyaVs9TPaccwvxbTMc-NtMEgPUo6qfUiIu25fB4Tzc-0O3IMx6fU9L-mYVhCJRScC89dCWDOw51wUbCiIdpW_SC2DME06qIA-TMkGRgXjgfcTl19d6GgVZ3YcYrf5fOzk1o9DFaYTdQQS90XZCYedsMpspmCgX7MNd5ry9Wq_3o3v_fEF7kzCGgyD08vUXyWIIHPViOYQrJfKi7-qwM3xGBERG_kAm0oLCLzKwYjTay-MKaxVCd7jzetYWXSHBPZRg-UCVKoXjYPnlmWFAiXVFFTJuTSzhwB_oxeGNqj8YmqpTRSVSyqCitZW9kbweKUVO2ArD1NjEmrlAea4GALIb2OkRksoJgX8ITr5K2rJgb7IvdNY-iFoI5Jq3w0dlhHm0xllet1NUAlClvmn8qPLcgaSXaVkOuhutgUujYNg_DwgN8-1sD5SJ8wQAg2vXL6PPEw8dCztB01L=w1694-h920-no'
      }
    ],
  }

  renderContents = () => {
    switch (this.state.view) {
      case 'about me':
        return <AboutMe />
        break
      default:
        return <Project project={this.state.projects.filter(project => project.name === this.state.view)[0]} />
        break
    }
  }

  changeView = (view) => {
    this.setState({ view })
  }

  render() {
    return (
      <>
        <div className='window-shadowed'>
          <div className='window-inner'>
            <h1 className='window-heading'>paul mourer</h1>
            <SideNav projects={this.state.projects} changeView={this.changeView} selected={this.state.view} />
            <main className='window-contents'>
              {this.renderContents()}
            </main>
          </div>
        </div>
      </>
    )
  }
}

export default App