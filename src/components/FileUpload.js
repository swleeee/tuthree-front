import React from 'react';
import styled from 'styled-components';

import { inject, observer, Provider } from 'mobx-react';

import { toJS } from 'mobx';

import addButtonImg from '../static/images/Signup/addFile.png';
import deleteButtonImg from '../static/images/Signup/delete.png';

import Auth from '../stores/Account/Auth';
import Community from '../stores/Community/Community';

@inject('Auth', 'Community')
@observer
class InputComponent extends React.Component {
  constructor(props) {
    super(props);
    this.file = React.createRef();
  }
  state = {
    fileArray: [],
    fileName: '',
    file: '',
    checkFileUpload: false,
  };

  async componentDidMount() {
    // const { ManufactureProcess, Project } = this.props;
    // console.log(toJS(ManufactureProcess.openFileArray));
    // if (ManufactureProcess.changeProject) {
    //   this.setState({ checkFileUpload: true });
    // }
    // console.log(toJS(ManufactureProcess.openFileArray));
  }
  onChange = (e) => {
    if (this.props.type === 'file') {
      this.props.onChange(e.currentTarget.files[0]);
    } else {
      this.props.onChange(e.currentTarget.value);
    }
  };

  onChangeFile = (e) => {
    const { type, fileAry } = this.props;
    console.info(e);
    console.info(e.currentTarget.files[0]);
    switch (type) {
      case 'signup':
        if (e && e.currentTarget.files[0]) {
          console.log(e.currentTarget.files[0]);

          Auth.fileAry.push(e.currentTarget.files[0]);
          console.info(toJS(Auth.fileAry));
          //   for (var item in e.currentTarget.files) {
          //     console.log(item);
          //     if (typeof e.currentTarget.files[item] === "object") {
          //       Auth.fileAry.push(e.currentTarget.files[item]);
          //     } else {
          //       break;
          //     }
          //   }

          Auth.fileName = e.currentTarget.files[0].name;
          this.setState({ checkFileUpload: true });
          //   this.setState({
          //     ...this.state,
          //     file: e.currentTarget.files[0],
          //     fileName: fileName,
          //     checkFileUpload: true,
          //   });
          //   const formData = new FormData();
          //   const files = e.target.files;
          //   Request.setCommonFile(e.currentTarget.files[0]);
          //   console.log(toJS(ManufactureProcess.openFileArray));
          // }
          console.info(Auth.fileName);
          // console.info(toJS(Auth.fileAry));
          console.info(toJS(Auth.fileAry));
        }
        break;
      case 'community':
        if (e && e.currentTarget.files[0]) {
          console.log(e.currentTarget.files[0]);

          Community.communityFileAry.push(e.currentTarget.files[0]);
          console.info(toJS(Community.communityFileAry));
          //   for (var item in e.currentTarget.files) {
          //     console.log(item);
          //     if (typeof e.currentTarget.files[item] === "object") {
          //       Auth.fileAry.push(e.currentTarget.files[item]);
          //     } else {
          //       break;
          //     }
          //   }

          Community.communityFileName = e.currentTarget.files[0].name;
          // this.setState({ checkFileUpload: true });
          //   this.setState({
          //     ...this.state,
          //     file: e.currentTarget.files[0],
          //     fileName: fileName,
          //     checkFileUpload: true,
          //   });
          //   const formData = new FormData();
          //   const files = e.target.files;
          //   Request.setCommonFile(e.currentTarget.files[0]);
          //   console.log(toJS(ManufactureProcess.openFileArray));
          // }
        }
        break;

      default:
        break;
    }
    // console.log(typeof e);
    // const { Request, ManufactureProcess } = this.props;
    // var file = document.getElementById("inputFile");
    // var filePath = file.value;
    // console.log(filePath);
    // const reader = new FileReader();
    // reader.readAsDataURL(e.currentTarget.files[0]);
    // reader.addEventListener("load", () => {
    //   this.setState({ src: reader.result });
    // });
  };

  render() {
    const {
      onChange,
      children,
      label,
      file,
      Request,
      ManufactureProcess,
      isOpen,
      mobile,
      type,
      fileAry,
      state,
      ...props
    } = this.props;
    const { fileName, checkFileUpload } = this.state;
    console.info(state);

    if (!file) {
      return (
        // <Provider Auth={Auth}>
        <Wrap width={this.props.width}>
          {label && <div fontWeight={500}>{label}</div>}
          <InputBox marginTop={label ? 12 : 0}>
            <Input>
              <input {...props} onChange={this.onChange} />
            </Input>
            {children}
          </InputBox>
        </Wrap>
        // </Provider>
      );
    }

    return (
      <Wrap width={this.props.width} state={state}>
        <FileText mobile={mobile} checkFileUpload={this.state.checkFileUpload}>
          <InputBox
            mobile={mobile}
            style={{ width: '100%', display: 'inline-flex' }}
            state={state}
          >
            <div>
              <div>
                {fileAry.map((item, idx) => {
                  return (
                    <>
                      <span
                        onClick={() => {
                          // if (checkFileUpload) {
                          fileAry.splice(idx, 1);
                          const inputFile =
                            document.getElementById('inputFile');
                          console.log(toJS(Auth.fileAry));
                          inputFile.innerHTML = '';

                          if (fileAry.length === 0) {
                            this.setState({ checkFileUpload: false });
                          }
                          // }
                        }}
                      >
                        <span>
                          <span>
                            {!item.name
                              ? decodeURI(item.file.split('/').pop())
                              : item.name}
                          </span>
                          <DeleteFile
                            src={deleteButtonImg}
                            style={{
                              display:
                                this.state.checkFileUpload || state === 'multi'
                                  ? 'inline'
                                  : 'none',
                            }}
                          />
                        </span>
                      </span>
                    </>
                  );
                })}
              </div>

              <input
                type="file"
                multiple={'multiple'}
                fileName={'fileName[]'}
                style={{ display: 'none' }}
                onChange={this.onChangeFile}
                id="inputFile"
                ref={this.file}
                value=""
                placeholder={'파일을 선택해 주세요.'}
              />

              <div
                onClick={() => {
                  console.log(this.file);
                  this.file.current.click();
                }}
              >
                {/* <span>파일첨부</span> */}
                {!this.state.checkFileUpload && <img src={addButtonImg} />}
              </div>
            </div>
          </InputBox>
        </FileText>
      </Wrap>
    );
  }
}

export default InputComponent;

const InputBox = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;  
  border: ${(props) =>
    props.state === 'single' ? '1px solid #ffffff' : 'none'};
  color: #404040;
  border-radius: 3px;
  box-sizing: border-box;
  >div{    
    width: ${(props) => (props.mobile ? '100%' : '100%')};
    display: flex;
    align-items:center;
    >div:nth-of-type(2){        
      cursor: pointer;
      display: flex;
      float: right;
      >span{
        font-size: ${(props) => (props.mobile ? '14px' : '18px')};
        line-height: 40px;
        letter-sacing: ${(props) => (props.mobile ? '-0.35px' : '-0.45px')};
        color: #0933b3;
        font-weight: normal;
        box-sizing: border-box;
        margin-right: 5px;
      }
      >img {
        vertical-align : baseline;
        width: ${(props) => (props.mobile ? '20px' : '32px')};
        height: ${(props) => (props.mobile ? '18px' : '32px')};
      }      
    }
      
    >div:nth-of-type(1){      
      width: 100%;   
      word-wrap: break-word;
      word-break:break-all;
      
      >span{      
        >span{    
            // border: 1px solid transparent;
            border-radius: 20px;
            background-color: #e1e2e4;      
            padding: 10px;
            box-sizing: border-box;
          >span{
            margin-right: 10px;
            font-size: 18px;
            line-height: 40px;
            letter-spacing: -0.45px;
            color: #282c36;
            font-weight: normal;
            cursor: pointer;
          }
        }
      }
    }
  }
}
   @media (min-width: 0px) and (max-width: 767.98px) { 
  //   height: 100%;
  //   height: 34px;
  //   object-fit: contain;
  //   border-radius: 3px;
  //   background-color: #ffffff;
  //   > img {
  //     position: relative;
  //     padding-top: 8px;
  //     padding-bottom: 8px;
  //     padding-right: 20px;
  //     padding-left: 0;
  //     width: 20px;
  //     height: 18px;
  //   }
  >div{
    div:nth-of-type(2){
      width: auto;
   
      >span{      
        >span{          
          >span{
            
            font-size: 12px;
          }
        }
      }
    }
  }
   }
`;
const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: ${(props) => (props.width ? props.width : '100%')};
  max-width: ${(props) => (props.state === 'single' ? '625px' : '')};

  @media (min-width: 0px) and (max-width: 767.98px) {
  }
  @media (min-width: 768px) and (max-width: 991.98px) {
    max-width: ${(props) => (props.state === 'single' ? '450px' : '')};
  }

  @media (min-width: 992px) and (max-width: 1299.98px) {
    max-width: ${(props) => (props.state === 'single' ? '500px' : '')};
  }
`;
const Input = styled.div`
  width: 100%;
  margin-top: ${(props) => props.marginTop}px;
  color: #404040;
  font-weight: 400;
  padding-left: 2.3%;
  :focus {
    outline: none;
  }
  > input {
    width: 100%;
    height: 100%;
    border: none;
    padding: 0 !important;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: -0.18px;
    text-align: left;
    font-size: 18px;
    :focus {
      outline: none;
    }
    ::placeholder {
      font-weight: 400;
      color: #c6c7cc;
    }
  }
  @media (min-width: 0px) and (max-width: 767.98px) {
    padding-left: 2.3% !important;
  > input {
    width: 100%;
    height: 100%;
    border: none;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 1.67;
    letter-spacing: -0.18px;
    text-align: left;
    font-size: 14px;
    :focus {
      outline: none;
    }
    ::placeholder {  
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: 2.43;
      letter-spacing: -0.35px;
      text-align: left;
      color: #999999;
      padding-left: 0;
    }
  }
`;
const FileText = styled.div`
  //width: 1152px;
  width: ${(props) => (props.mobile ? '100%' : '100%')};
  border: 1px solid #c7c7c7;
  font-stretch: normal;
  font-style: normal;
  line-height: 40px;
  letter-spacing: -0.18px;
  text-align: left;
  color: #c6c7cc;
  display: inline-flex;
  align-items: center;
  padding: ${(props) => (props.mobile ? '0 14px 0 14px' : '2px 3px')};
  flex-wrap: wrap;
  background-color: #ffffff;
  box-sizing: border-box;
  height: ${(props) => (props.mobile ? '100%' : '60px')};
  > span:nth-of-type(1) {
    > span {
      > img {
        margin: auto;
      }
    }
  }
  > span {
    align-self: center;
    > span {
      margin-right: 10px;
      color: #282c36;
      font-weight: normal;
    }
    > img:last-child {
      margin-right: 20px;
    }
  }
  @media (min-width: 0px) and (max-width: 767.98px) {
    //   font-size: 14px !important;
    //   padding-top: 0px;
    //   font-weight: normal;
    //   font-stretch: normal;
    //   font-style: normal;
    //   line-height: 2.43;
    //   letter-spacing: -0.35px;
    //   text-align: left;
    //   color: #999999;
  }
`;
const DeleteFile = styled.img`
  width: 18px;
  height: 18px;
  padding: 2px;
  box-sizing: border-box;
  //   border: 1px solid transparent;
  //   border-radius: 9px;
  //   background-color: #e1e2e4;
  align-self: center;
  line-height: 40px;
  letter-spacing: -0.45px;
  margin-right: 10px;
  vertical-align: middle;
  cursor: pointer;
  @media (min-width: 0px) and (max-width: 767.98px) {
    margin-right: 13px;
  }
`;
