import type { ReactNode } from "react";

export function PageIntro({
  kicker,
  title,
  lede,
  children,
}: {
  kicker: string;
  title: string;
  lede: ReactNode;
  children?: ReactNode;
}) {
  return (
    <header className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 pt-14 pb-10 sm:pt-20 sm:pb-12">
        <p className="text-xs font-semibold tracking-widest text-teal uppercase">{kicker}</p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl leading-tight font-medium text-balance sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-pretty text-muted">{lede}</p>
        {children}
      </div>
    </header>
  );
}

export function FlowBlock({
  id,
  n,
  title,
  lede,
  children,
}: {
  id: string;
  n: string;
  title: string;
  lede: ReactNode;
  children: ReactNode;
}) {
  return (
    <section id={id} className="section-anchor border-b border-line" aria-labelledby={`${id}-title`}>
      <div className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
        <p className="text-xs font-semibold tracking-widest text-teal uppercase">{n}</p>
        <h2 id={`${id}-title`} className="mt-2 max-w-3xl font-serif text-3xl font-medium text-balance sm:text-4xl">
          {title}
        </h2>
        <p className="mt-4 max-w-3xl text-pretty text-muted">{lede}</p>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}

export function Steps({
  label,
  items,
}: {
  label: string;
  items: { title: string; text: ReactNode }[];
}) {
  return (
    <ol className="step-flow" aria-label={label}>
      {items.map((item, index) => (
        <li key={item.title}>
          {index > 0 ? <span className="step-arrow" aria-hidden="true" /> : null}
          <div className="step-node">
            <span className="step-n">{String(index + 1).padStart(2, "0")}</span>
            <p className="step-title">{item.title}</p>
            <p className="step-text">{item.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

type Field = { label: string; value: string; previous?: string };

export function RecordPair({
  label,
  beforeCaption,
  beforeEmpty,
  before,
  afterCaption,
  after,
  arrow,
}: {
  label: string;
  beforeCaption: string;
  beforeEmpty?: string;
  before?: Field[];
  afterCaption: string;
  after: Field[];
  arrow: string;
}) {
  return (
    <div className="record-pair" role="group" aria-label={label}>
      <RecordCard caption={beforeCaption} empty={beforeEmpty} fields={before} />
      <p className="record-arrow">
        <span aria-hidden="true">→</span>
        <span className="sr-only">{arrow}</span>
        <span aria-hidden="true" className="record-arrow-label">
          {arrow}
        </span>
      </p>
      <RecordCard caption={afterCaption} fields={after} />
    </div>
  );
}

function RecordCard({
  caption,
  empty,
  fields,
}: {
  caption: string;
  empty?: string;
  fields?: Field[];
}) {
  return (
    <div className="record-card">
      <p className="record-caption">{caption}</p>
      {empty ? (
        <p className="record-empty">{empty}</p>
      ) : (
        <dl className="record-fields">
          {fields?.map((field) => (
            <div key={field.label} className="record-row">
              <dt>{field.label}</dt>
              <dd>
                {field.previous ? <span className="field-old">{field.previous}</span> : null}
                <span className={field.previous ? "field-new" : undefined}>{field.value}</span>
              </dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  );
}

export function Compare({
  label,
  columns,
  note,
}: {
  label: string;
  columns: { title: string; figure: string; text: string }[];
  note: string;
}) {
  return (
    <div>
      <div className="compare" role="group" aria-label={label}>
        {columns.map((column, index) => (
          <div key={column.title} className="contents">
            {index > 0 ? (
              <span className="compare-eq" aria-hidden="true">
                ≈
              </span>
            ) : null}
            <div className="compare-col">
              <p className="compare-figure">{column.figure}</p>
              <p className="compare-title">{column.title}</p>
              <p className="compare-text">{column.text}</p>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 max-w-3xl text-sm text-muted">{note}</p>
    </div>
  );
}

export function Bars({
  label,
  rows,
}: {
  label: string;
  rows: { label: string; width: string; text: string }[];
}) {
  return (
    <div className="bars" role="group" aria-label={label}>
      {rows.map((row) => (
        <div key={row.label} className="bar-row">
          <div className="bar-meta">
            <p className="bar-label">{row.label}</p>
            <p className="bar-text">{row.text}</p>
          </div>
          <div className="bar-track" aria-hidden="true">
            <span className="bar-fill" style={{ width: row.width }} />
          </div>
        </div>
      ))}
    </div>
  );
}
