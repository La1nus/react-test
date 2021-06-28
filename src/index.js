import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';

const TARIFFS = [
  { head: { name: "Базовый тариф", short_desc: "Базовый тариф...", description: "Базовый тариф включает в себя 10 транспортных накладных документов, количество пользователей 1, поддержка на сайте, тариф бесплатно." }, body: { docs: "10", users: "1", support: "На сайте", integration: "отсутствует", price: "Бесплатно" } },
  { head: { name: "Абонентская плата", short_desc: "Количество транспортных...", description: "Количество транспортных накладных за месяц, количество транспортных за накладных за месяц-неограниченно, количество пользователей, поддержка пользователей." }, body: { docs: "Не ограничено", users: "Не ограничено", support: "Выделенный менеджер", integration: "Да, по отдельному договору", price: "200 рублей/месяц\n2000 рублей/год" } },
  { head: { name: "Транзакционный тариф"}, body: { docs: "Оплата с 10-го документа", users: "1", support: "На сайте", integration: "Да, по отдельному договору", price: "100 руб. за документ" } }
];

const BLOCKS = [
  {
    text: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit nisi libero excepturi
    consectetur. Quae eum labore vitae, quia eligendi fugiat.`,
    name: "First Column"
  },
  {
    text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet facere blanditiis odio
    tempora. Voluptatem harum provident sapiente fugit, eos ipsam veritatis mollitia. Autem, iure
    perferendis. Officiis asperiores minima saepe amet ea est eos facere neque dolore totam beatae
    facilis dicta, odio iusto esse ex. Fugit, ullam quasi perferendis ad reiciendis, similique
    vitae sit dolor vel temporibus voluptatum fuga consequatur laboriosam hic maiores adipisci nihil?
    Placeat, cumque vero repellendus reprehenderit dolores aliquid officia non amet! Quo placeat
    sapiente voluptates, magnam saepe eos quod impedit, odio neque magni, tempora nemo est
    expedita fugiat deleniti tenetur deserunt esse accusantium ut maxime nesciunt facere?`, name: "Second Column"
  },
  {
    text: `Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla, consequatur.`, name: "Third Column"
  },
  {
    text: `orem ipsum dolor sit amet consectetur adipisicing elit. Adipisci vitae voluptas enim quae
    consequuntur quas maiores quidem, magnam fugiat, ratione officia dolorem, ab explicabo
    inventore
    numquam praesentium provident veritatis nobis culpa asperiores omnis. Sint optio corrupti,
    aliquid maxime architecto est provident ex, itaque labore nulla ut dolores nesciunt nostrum
    minus.`, name: "Fourth Column"
  }
]

//



class First extends React.Component {
  render() {
    return (
      <section className="first">
        <div className="first__container _container">
          <Table tariffs={TARIFFS} />
        </div>
      </section>
    )
  }
}

class Table extends React.Component {
  render() {
    const items = this.props.tariffs.map((item, i) => <div className="table__column" key={i}>
      <TableItem tariff={item} /></div>);
    console.log(items);
    return (
      <div className="table"> {items}</div>
    )
  }
}

class TableItem extends React.Component {
  render() {
    return (
      <div className="table__item">
        <TableItemHead tariff_head={this.props.tariff.head} />
        <TableItemBody tariff_body={this.props.tariff.body} />
      </div>
    )
  }
}

class TableItemHead extends React.Component {
  constructor(props) {
    super(props)
    this.state = { open: false }

    this.ToggleDescription = this.ToggleDescription.bind(this)
  }

  ToggleDescription() {
    this.setState((prevState) => ({
      open: !prevState.open
    }))
  }

  render() {
    return (
      <div className="table__item__head">
        <h2>{this.props.tariff_head.name}</h2>
        <p>{!this.state.open ? this.props.tariff_head.short_desc : this.props.tariff_head.description}</p>
        {this.props.tariff_head.description !==undefined && <div className="table__item__action" onClick={this.ToggleDescription}>{!this.state.open ? "Читать дальше" : "Скрыть"}</div>}
      </div>
    )
  }
}

class TableItemBody extends React.Component {
  render() {
    return (
      <div className="table__item__body">
        <TableItemCell name="Количество транспортных накладных за месяц:" value={this.props.tariff_body.docs} />
        <TableItemCell name="Количество пользователей:" value={this.props.tariff_body.users} />
        <TableItemCell name="Поддержка:" value={this.props.tariff_body.support} />
        <TableItemCell name="Интеграция:" value={this.props.tariff_body.integration} />
        <TableItemCell name="Размер оплаты:" value={this.props.tariff_body.price} />
      </div>)
  }
}

class TableItemCell extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
    this.ToggleText = this.ToggleText.bind(this)
  }

  ToggleText() {
    this.setState((prevState) => ({
      show: !prevState.show
    }))
  }

  render() {
    return (<div className="table__item__cell">
      <p>{this.props.name}</p>
      {this.state.show ?
        <div className="table__item__value">{this.props.value}</div> : null}
      <div onClick={this.ToggleText} className="table__item__btn">{this.state.show ? "Скрыть" : "Показать"}</div>
    </div>)
  }
}



//-------------------------------------------------------


class Second extends React.Component {
  render() {
    return (
      <section className="second">
        <div className="second__container _container">
          <SecondRow blocks={BLOCKS} />
        </div>
      </section>
    )
  }
}

class SecondRow extends React.Component {
  render() {
    const items = this.props.blocks.map((block, i) => {
      return <SecondItem block={block} />
    })
    return (
      <div className="second__row">{items}</div>
    )
  }
}

class SecondItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = { show_popup: false }
    this.TogglePopup = this.TogglePopup.bind(this)
  }

  TogglePopup() {
    this.setState((prevState) => ({
      show_popup: !prevState.show_popup
    }))
  }

  render() {
    return (
      <div className="second__column">
        <div className="second__item">
          <h2 onMouseOver={this.TogglePopup} onMouseLeave={this.TogglePopup}>{this.props.block.name}</h2>
          <div className="second__text">{this.props.block.text}</div>
        </div>
        {this.state.show_popup ? <div className="second__popup">{this.props.block.text}</div> : null}
      </div>
    )
  }
}



class Third extends React.Component {
  render() {
    return (
      <section className="third">
        <div className="third__container _container">
          <ThirdRow />
        </div>
      </section>
    )
  }
}

class ThirdRow extends React.Component {
  render() {
    return (
      <div className="third__row">
        <ThirdColumn />
        <ThirdColumn />
        <ThirdColumn />
      </div>
    )
  }
}

class ThirdColumn extends React.Component {
  constructor(props) {
    super(props)
    this.state = { show: true }

    this.ToggleInputs = this.ToggleInputs.bind(this)
  }

  ToggleInputs() {
    this.setState((prevState) => ({
      show: !prevState.show
    }))
  }

  render() {
    return (
      <div className="third__column">
        <div className="third__action" onClick={this.ToggleInputs}>{this.state.show ? "Скрыть" : "Показать"}</div>
        <ThirdItem show={this.state.show} />
      </div>
    )
  }
}

class ThirdItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = { input: "", select: "", textarea: "" }
  }

  onChange(type, e) {
    console.log(e);
    switch (type) {
      case "input":
        this.setState(() => ({
          input: e.target.value
        }))
        break;
      case "select":
        this.setState(() => ({
          select: e.target.value
        }))
        break;
      case "textarea":
        this.setState(() => ({
          textarea: e.target.value
        }))
        break
      default: break
    }
  }

  render() {
    let item
    if (this.props.show) {
      item = <div className="third__item">
        <input type="text" value={this.state.input} onChange={this.onChange.bind(this, "input")} />
        <select value={this.state.select} onChange={this.onChange.bind(this, "select")}>
          <option value="1">First option</option>
          <option value="2">Second option</option>
          <option value="3">Third option</option>
          <option value="4">Fourth option</option>
          <option value="5">Fifth option</option>
        </select>
        <textarea cols="30" rows="10" className="first__textarea" value={this.state.textarea} onChange={this.onChange.bind(this, "textarea")}></textarea>
      </div>
    } else item = null

    return (
      item
    )
  }
}


class Page extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <main className="page">
          <First />
          <Second />
          <Third />
        </main>
      </div>
    )
  }
}

ReactDOM.render(
  <Page />,
  document.getElementById("root")
);
