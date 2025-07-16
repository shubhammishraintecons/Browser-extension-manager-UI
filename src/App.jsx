import './App.css'
import ExtensionCard from './component/ExtensionCard/ExtensionCard'
import FilterBar from './component/Filterbar.jsx/FilterBar'
import Headerbar from './component/Navbar/Headerbar'
import data from '../extensions'
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import ExtensionList from './component/ExtensionList/ExtensionList'

function App() {

  return (
    <>
      <Headerbar />
      <ExtensionList />

    </>
  )
}

export default App
