import React from 'react';
import { motion } from 'framer-motion';
import styled from '@emotion/styled';

import { IoMdTime } from 'react-icons/io';
import { SiMarketo } from 'react-icons/si';

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import PuppyChat from '../../image/gif/puppyChat.gif';
import PuppySearch from '../../image/gif/puppySearch.gif';
import pxlList from '../../image/gif/pxlList.gif';
import pxlSearch from '../../image/gif/pxlSearch.gif';
import reward from '../../image/gif/reward.gif';
import market from '../../image/gif/market.gif';
import benzDash from '../../image/vendash.png';
import benzApp from '../../image/venapp.png';
import mes from '../../image/mes.png';
import sensorList from '../../image/sensorList.png';

import { LuDog } from 'react-icons/lu';
import { GrTools } from 'react-icons/gr';
import { colors } from 'styles/theme/colors';

const Experience = () => {
  return (
    <ExeriencePart>
      <VerticalTimeline>
        <ExperienceItem
          contentArrowStyle={{ borderRight: `7px solid ${colors['white-0']}` }}
          // date={'2021.11 - 2021.12'}
          iconStyle={{
            background: colors.pointYellow,
            color: '#fff',
          }}
          icon={<LuDog />}
          intersectionObserverProps={{
            rootMargin: '-300px',
            triggerOnce: true,
          }}
        >
          <h3 className="work-title">With Puppy</h3>
          <h4 className="work-subtitle">
            반려 동물의 산책 메이트를 쉽게 연결해주는 서비스
          </h4>
          <h4 className="work-duration">
            <motion.span className="time-icon">
              <IoMdTime />
            </motion.span>
            제작기간 총 4주
          </h4>

          <div className="description">
            <div className="img-box-puppy">
              <img src={PuppySearch} alt="" />
              <img src={PuppyChat} alt="" />
            </div>

            <ul>
              <label>
                <motion.span
                  className="icon"
                  animate={{ rotate: 90, translateX: 3 }}
                  transition={{
                    ease: 'easeInOut',
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                >
                  <GrTools />
                </motion.span>
                구현 내용
              </label>

              <li>전반적인 Layout Structure 구성 및 디자인</li>
              <li>Oauth 시스템 및 일반 회원가입, 마이페이지 시스템 구현</li>
              <li>Kako Map API를 활용한 좌표 세이브 기능 구현</li>
              <li>데이터베이스 및 서버 구축</li>
              <li>댓글 시스템 구현</li>
              <li>Socket.io를 이용한 실시간 업데이트 알람 구현</li>
            </ul>
          </div>
        </ExperienceItem>

        <ExperienceItem
          contentArrowStyle={{ borderRight: `7px solid ${colors['white-0']}` }}
          iconStyle={{
            background: colors.pointYellow,
            color: '#fff',
          }}
          icon={<SiMarketo />}
          intersectionObserverProps={{
            rootMargin: '-300px',
            triggerOnce: true,
          }}
        >
          <h3 className="work-title">PXL Market</h3>
          <h4 className="work-subtitle">
            원티드 x 오드컨셉 기업협업 프로젝트 과제
          </h4>
          <h4 className="work-duration">
            <motion.span className="time-icon">
              <IoMdTime />
            </motion.span>
            제작기간 3일
          </h4>

          <div className="description">
            <div className="img-box-puppy">
              <img src={pxlList} alt="" />
              <img src={pxlSearch} alt="" />
            </div>

            <ul>
              <label>
                <motion.span
                  className="icon"
                  animate={{ rotate: 90, translateX: 3 }}
                  transition={{
                    ease: 'easeInOut',
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                >
                  <GrTools />
                </motion.span>
                구현 내용
              </label>

              <li>Masoic Layout 기반 무한스크롤 구현</li>
              <li>
                웹 캐시 스토리지를 활용한 데이터 캐싱으로 네트워크 요청 감소
              </li>
              <li>Mobile, Tablet 등 다양한 디바이스 지원을 위한 반응형 구조</li>
            </ul>
          </div>
        </ExperienceItem>

        <ExperienceItem
          contentArrowStyle={{ borderRight: `7px solid ${colors['white-0']}` }}
          iconStyle={{
            background: colors.pointYellow,
            color: '#fff',
          }}
          icon={<SiMarketo />}
          intersectionObserverProps={{
            rootMargin: '-300px',
            triggerOnce: true,
          }}
        >
          <h3 className="work-title">Alock Wallet</h3>
          <h4 className="work-subtitle">
            블록체인 기반 리워드 제공 및 코인 관리 전자지갑 앱
          </h4>
          <h4 className="work-duration" style={{ marginTop: 20 }}>
            {''}
          </h4>

          <div className="description">
            <div className="img-box-puppy">
              <img src={reward} alt="" />
              <img src={market} alt="" />
            </div>

            <ul>
              <label>
                <motion.span
                  className="icon"
                  animate={{ rotate: 90, translateX: 3 }}
                  transition={{
                    ease: 'easeInOut',
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                >
                  <GrTools />
                </motion.span>
                업무 내용
              </label>

              <li>React Native 기반 모바일 앱 기능 개발 및 기존 코드 최적화</li>
              <li>IOS, Android 앱 배포 담당</li>
              <li>Google Analytics 도입을 통한 통계 데이터 초기 리소스 제공</li>
              <li>앱 리뉴얼 프로젝트에 따른 프론트 UI 개발 담당</li>
              <li>마켓 시스템 도입을 위한 백엔드, 데이터베이스 구축 참여</li>
              <li>toss 결제 시스템 도입 및 포인트 기반 결제 페이지 제작</li>
            </ul>
          </div>
        </ExperienceItem>

        <ExperienceItem
          contentArrowStyle={{ borderRight: `7px solid ${colors['white-0']}` }}
          iconStyle={{
            background: colors.pointYellow,
            color: '#fff',
          }}
          icon={<SiMarketo />}
          intersectionObserverProps={{
            rootMargin: '-300px',
            triggerOnce: true,
          }}
        >
          <h3 className="work-title">Benz adviser</h3>
          <h4 className="work-subtitle">
            벤츠 차량 수리현황 시각화 대시보드 및 결과처리 SNS 전송 서비스
          </h4>
          <h4 className="work-duration" style={{ marginTop: 20 }}>
            {''}
          </h4>

          <div className="description">
            <div className="img-box-puppy">
              <img src={benzDash} alt="" />
              <img src={benzApp} alt="" />
            </div>

            <ul>
              <label>
                <motion.span
                  className="icon"
                  animate={{ rotate: 90, translateX: 3 }}
                  transition={{
                    ease: 'easeInOut',
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                >
                  <GrTools />
                </motion.span>
                업무 내용
              </label>

              <li>
                데이터 시각화 라이브러리를 활용한 접수건 처리 현황 UI 전체제작
              </li>
              <li>슈어엠과 제휴하여 SNS를 통한 처리결과 알림 서비스 제작</li>
              <li>
                QR scanner를 통해 수리 현황 조회 및 처리 결과 상태 반영 기능
                제작
              </li>
            </ul>
          </div>
        </ExperienceItem>

        <ExperienceItem
          contentArrowStyle={{ borderRight: `7px solid ${colors['white-0']}` }}
          iconStyle={{
            background: colors.pointYellow,
            color: '#fff',
          }}
          icon={<SiMarketo />}
          intersectionObserverProps={{
            rootMargin: '-300px',
            triggerOnce: true,
          }}
        >
          <h3 className="work-title">MES</h3>
          <h4 className="work-subtitle">
            스마트 펙토리 생산관리 및 공정 제어시스템
          </h4>
          <h4 className="work-duration" style={{ marginTop: 20 }}>
            {''}
          </h4>

          <div className="description">
            <div className="img-box-puppy">
              <img src={mes} alt="" />
              <img src={sensorList} alt="" />
            </div>

            <ul>
              <label>
                <motion.span
                  className="icon"
                  animate={{ rotate: 90, translateX: 3 }}
                  transition={{
                    ease: 'easeInOut',
                    duration: 0.5,
                    repeat: Infinity,
                    repeatType: 'reverse',
                  }}
                >
                  <GrTools />
                </motion.span>
                업무 내용
              </label>

              <li>작업 지시서 등록 및 작업 일보 작성 관리 시스템 유지보수</li>
              <li>제조 공정 자재 관리 페이지 오류 수정 및 유지보수</li>
              <li>디바이스 센서 이상 감지 알람 표시 기능 구현</li>
            </ul>
          </div>
        </ExperienceItem>
      </VerticalTimeline>
    </ExeriencePart>
  );
};

export default Experience;

export const ExeriencePart = styled.div`
  margin-top: 7rem;

  .vertical-timeline {
    max-width: initial;
  }
`;
export const ExperienceItem = styled(VerticalTimelineElement)`
  & .vertical-timeline-element-content {
    background-color: ${({ theme }) => theme.colors['white-0']};
    padding: 2rem;
  }

  & .vertical-timeline-element-date {
    color: ${({ theme }) => theme.colors['white-0']};
    font-weight: 700;
    font-size: 2rem !important;
  }

  & .work-title {
    font-size: 6rem;
    position: relative;

    &:before {
      content: '';
      width: 100%;
      height: 0.25rem;
      background-color: ${({ theme }) => theme.colors.pointGreen};
      position: absolute;
      bottom: -1rem;
      right: 0;
    }
  }

  & .work-subtitle {
    font-size: 2rem;
    margin-top: 3rem;
    line-height: 1.7rem;
  }

  & .work-duration {
    font-size: 1.5rem;
    margin-top: 1rem;
    display: flex;
    gap: 0.3rem;
    color: ${({ theme }) => theme.colors['black-0']};
    opacity: 0.8;
  }

  & .description {
    display: flex;
    flex-direction: column;

    & [class^='img-box-'] {
      margin-top: 1.7rem;
      display: flex;
      gap: 2rem;
      width: 100%;
      max-height: 55rem;
      & img {
        border: 1.5px solid ${({ theme }) => theme.colors.pointGreen};
        border-radius: 5%;
        width: 48.5%;
        overflow: hidden;
      }
    }

    & ul {
      & label {
        font-size: 2.5rem;
        display: flex;
        gap: 0.8rem;
      }

      list-style: circle;
      margin-top: 3rem;
      display: flex;
      flex-direction: column;
      gap: 1rem;
      & li {
        text-decoration: none;
        font-size: 2rem;
        margin-left: 3rem;
      }
    }
  }
`;
