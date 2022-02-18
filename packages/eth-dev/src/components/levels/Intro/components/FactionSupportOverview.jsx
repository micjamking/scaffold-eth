import React from 'react'
import { connectController as wrapGlobalGameData } from '../../../gameItems'
import { Button, CodeContainer, WindowModal } from '../../../gameItems/components'

const FactionSupportOverviewWindow = ({ isOpen, globalGameActions }) => {
  const LEVELS_IDS = [
    'TemplateLevel',
    'Intro',
    'UnderflowBug',
    'SetupLocalNetwork',
    'CreateWallet',
    'SetupMetamask',
    'GamblingContract',
    'Multisig',
    'DecentralizedExchange',
    'NFTStore',
    'DAOHack',
    'FlashLoans'
  ]

  const factionProgressComp = ({ factionName, progress, levels }) => {
    return (
      <>
        <div
          className='nes-badge'
          style={{
            width: '97%'
          }}
        >
          <span className='is-primary'>{factionName}</span>
        </div>
        <div
          className='nes-badge is-splited'
          style={{
            width: '97%'
          }}
        >
          <span className='is-dark'>progress</span>
          <span className='is-success'>{progress}%</span>
        </div>
        <div style={{ padding: 20 }}>
          <div style={{ marginBottom: 15 }}>Levels:</div>
          <ol style={{ marginLeft: 25 }}>
            {levels.map(({ levelId, name }) => {
              return (
                <li style={{ color: levelId ? '#fff' : '#ccc' }}>
                  {levelId && (
                    <a onClick={() => globalGameActions.level.setCurrentLevel({ levelId })}>
                      {name}
                    </a>
                  )}
                  {!levelId && <span style={{ color: '#ccc' }}>{name}</span>}
                </li>
              )
            })}
          </ol>
        </div>
      </>
    )
  }

  return (
    <WindowModal
      initTop={window.innerHeight * 0.02}
      initLeft={window.innerWidth * 0.02}
      initHeight={window.innerHeight * 0.9}
      initWidth={800}
      // backgroundPath='./assets/items/window.png'
      dragAreaHeightPercent={4}
      // windowTitle=''
      isOpen={isOpen}
      contentContainerStyle={{ paddingTop: 0 }}
      style={{
        backgroundColor: 'rgb(25, 218, 252, 0.2)'
        // backgroundColor: 'rgb(25, 218, 252)'
      }}
    >
      <div
        className='content'
        style={{
          float: 'left',
          width: '100%',
          height: '100%',
          overflowY: 'auto',
          overflowX: 'hidden'
        }}
      >
        <div
          style={{
            marginTop: '1%',
            marginBottom: '5%',
            color: '#16DC8C',
            fontSize: 16
          }}
        >
          <div style={{ color: 'white' }}>
            <div style={{ textAlign: 'center', marginBottom: 15 }}>
              <i className='nes-icon is-medium star' />
              <i className='nes-icon is-medium star' />
              <i className='nes-icon is-medium star' />
              {'   '}GAME PROGRESS{'   '}
              <i className='nes-icon is-medium star' />
              <i className='nes-icon is-medium star' />
              <i className='nes-icon is-medium star' />
            </div>
            {/* ------ */}
            {factionProgressComp({
              factionName: 'Basics',
              progress: 0,
              levels: [
                { levelId: 'SetupLocalNetwork', name: 'Setup local Ethereum Network' },
                { levelId: 'SetupMetamask', name: 'Setup Metamask' },
                { levelId: 'CreateWallet', name: 'Create Wallet' },
                { levelId: null, name: 'General Solidity Syntax' }
              ]
            })}
            {factionProgressComp({
              factionName: 'Hacker/Security Anons',
              progress: 0,
              levels: [
                { levelId: 'UnderflowBug', name: 'ER20 Underflow Hack' },
                { levelId: 'GamblingContract', name: 'Hackable Dice Game' },
                { levelId: 'DAOHack', name: 'DAO Hack History' }
              ]
            })}
            {factionProgressComp({
              factionName: 'Smart Contract Ninjas',
              progress: 0,
              levels: [
                { levelId: null, name: 'ERC20' },
                { levelId: 'Multisig', name: 'MultiSig' },
                { levelId: null, name: 'Minimal DAO' },
                { levelId: null, name: 'ENS' }
              ]
            })}
            {factionProgressComp({
              factionName: 'DAPP Buidlers',
              progress: 0,
              levels: [{ levelId: 'NFTStore', name: 'NFT Store' }]
            })}
            {factionProgressComp({
              factionName: 'DEFI Degens',
              progress: 0,
              levels: [
                { levelId: null, name: 'Tokeneconomics' },
                { levelId: 'DecentralizedExchange', name: 'DEX/Uniswap' },
                { levelId: 'FlashLoans', name: 'Flash loans' },
                { levelId: null, name: 'Aave/Lend' },
                { levelId: null, name: 'Compound' },
                { levelId: null, name: 'Bonding Curves' },
                { levelId: null, name: 'Curve.fi' }
              ]
            })}
          </div>
        </div>
      </div>
    </WindowModal>
  )
}

export default wrapGlobalGameData(FactionSupportOverviewWindow)