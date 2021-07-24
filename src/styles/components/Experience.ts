import styled from 'styled-components';

export const Container = styled.section`
  background: #efe4f5;
  height: 3250px;
  padding: 100px 30px 30px 30px;

  .text-center-row {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    .text-uppercase {
      margin-top: 60px;
      font-size: 45px;
      font-family: 'Orbitron', sans-serif;
    }

    .text-muted {
      margin: 25px 0 50px 0;
      font-style: 'italic';
      font-weight: lighter;
      color: #838b93;
    }
  }

  .timeline {
  position: relative;
  padding: 0;
  list-style: none;
  &:before {
    position: absolute;
    top: 0;
    bottom: 15px;
    left: 40px;
    width: 3px;
    margin-left: -1.5px;
    content: '';
    background-color: #00d0e5;
  }
  > li {
    position: relative;
    min-height: 50px;
    margin-bottom: 50px;
    
    &:after,
    &:before {
      display: table;
      content: ' ';
    }
    &:after {
      clear: both;
    }
    .timeline-panel {
      position: relative;
      float: right;
      width: 100%;
      padding: 36px 20px 20px 14px;
      text-align: left;
      &:before {
        right: auto;
        left: -15px;
        border-right-width: 15px;
        border-left-width: 0;
      }
      &:after {
        right: auto;
        left: -14px;
        border-right-width: 14px;
        border-left-width: 0;
      }
    }
    .timeline-image {
      position: absolute;
      z-index: 100;
      left: 0;
      width: 80px;
      height: 80px;
      margin-left: 0;
      text-align: center;
      color: white;
      border: 7px solid gray;
      border-radius: 100%;
      background-color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: border-color .5s;

      &.circleActive {
        border: 7px solid #00d0e5;
        transition: border-color .5s;
      }
      
      img {
        border-radius: 100%;
        width: 100%;
        height: 100%;
        object-fit: contain;
        z-index: -1;
      }

      &:last-child {
        background-color: #00d0e5;
      }
    }

    &.timeline-inverted > .timeline-panel {
      float: right;
      padding: 0 20px 0 100px;
      text-align: left;
      &:before {
        right: auto;
        left: -15px;
        border-right-width: 15px;
        border-left-width: 0;
      }
      &:after {
        right: auto;
        left: -14px;
        border-right-width: 14px;
        border-left-width: 0;
      }
    }
    &:last-child {
      margin-bottom: 0;
    }
  }

  .timeline-heading {
    h4 {
      font-size: 25px;
      margin-top: 0;
      color: inherit;
      &.subheading {
        text-transform: none;
      }
    }
  }
  .timeline-body {
     > ul,
    > p {
      margin-bottom: 0;
      font-size: 20px;
      color: #6c757d;
      transition: color .5s;

      &.activeText {
        color: #13b5c5;
        transition: color .5s;
      }
    }
  }
}
@media(min-width:768px) {
  .timeline {
    &:before {
      left: 50%;
    }
    > li {
      min-height: 100px;
      margin-bottom: 100px;
      .timeline-panel {
        float: left;
        width: 41%;
        padding: 0 20px 20px 30px;
        text-align: right;
      }
      .timeline-image {
        left: 50%;
        width: 100px;
        height: 100px;
        margin-left: -50px;
        h4 {
          font-size: 13px;
          line-height: 18px;
          margin-top: 16px;
        }
      }
      &.timeline-inverted > .timeline-panel {
        float: right;
        padding: 0 30px 20px 20px;
        text-align: left;
      }
    }
  }
}
@media(min-width:992px) {
  .timeline {
    > li {
      min-height: 150px;
      .timeline-panel {
        padding: 0 20px 20px;
      }
      .timeline-image {
        width: 150px;
        height: 150px;
        margin-left: -75px;
        h4 {
          font-size: 18px;
          line-height: 26px;
          margin-top: 30px;
        }
      }
      &.timeline-inverted > .timeline-panel {
        padding: 0 20px 20px;
      }
    }
  }
}
@media(min-width:1200px) {
  .timeline {
    > li {
      min-height: 170px;
      .timeline-panel {
        padding: 36px 20px 20px 14px;
      }
      .timeline-image {
        width: 170px;
        height: 170px;
        margin-left: -85px;
        h4 {
          margin-top: 40px;
        }
      }
      &.timeline-inverted > .timeline-panel {
        padding: 30px 5px 20px 20px;
      }
    }
  }
}
`; 